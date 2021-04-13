import { Component, Element, h, Prop } from '@stencil/core';

import { ColDef, Grid, GridOptions, ITooltipParams, ModuleRegistry, ValueFormatterParams, ValueGetterParams } from '@ag-grid-community/all-modules';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
ModuleRegistry.register(ClientSideRowModelModule);

import { isDarkMode } from '../../helpers/utils';

type ColType = 'rightAligned' | 'numericColumn' | string;

/** See https://www.ag-grid.com/javascript-grid/column-properties/ */
export type ColumnDef = ColDef & {
  field: string;
  headerName?: string;
  headerClass?: string | string[];
  topPanelClass?: string | string[];
  /** See https://www.ag-grid.com/javascript-grid/column-definitions/#default-column-definitions */
  type?: ColType | ColType[];
  /** Min width, in pixels, of the cell */
  minWidth?: number;
  /** Max width, in pixels, of the cell */
  maxWidth?: number;
  autoHeight?: boolean;
  wrapText?: boolean;
  /** Sets the grow factor of a column. It specifies how much of the remaining
   * space should be assigned to the column.
   */
  flex?: number;
  filter?: 'agNumberColumnFilter' | 'agTextColumnFilter' | 'agDateColumnFilter';
  /** Pin the column to one side */
  pinned?: 'left' | 'right';
  /** Set to `true` for this column to be hidden */
  hide?: boolean;
  /** Set to `true` to always have this column displayed first */
  lockPosition?: boolean;
  /** Set to `true` to allow sorting */
  sortable?: boolean;
  /** Set to sort this column */
  sort?: 'asc' | 'desc';
  /** Set to `true` to allow resizing */
  resizable?: boolean;
  headerTooltip?: string;
  tooltipField?: string;
  /** The function used to calculate the tooltip of the object, tooltipField takes precedence */
  tooltipValueGetter?: (params: ITooltipParams) => string;
  checkboxSelection?: boolean | Function;
  rowDrag?: boolean | Function;
  cellClass?: string;
  cellStyle?: { [key: string]: string };
  /** https://www.ag-grid.com/javascript-grid/cell-styles/#cell-class-rules */
  cellClassRules?: { [key: string]: boolean | Function };
  /** Set to `true` to allow editing */
  editable?: boolean;
  /** Function or expression. Gets the value from your data for display. */
  valueGetter?: ((params: ValueGetterParams) => any) | string;
  /** A function to format a value, should return a string. Not used for CSV export or copy to clipboard, only for UI cell rendering. */
  valueFormatter?: ((params: ValueFormatterParams) => string) | string;
};

@Component({
  tag: 'ag-grid',
  styleUrl: 'ag-grid.css',
})
export class AgGrid {
  @Element() el: HTMLElement;

  agGrid: any;

  @Prop() darkMode?: boolean;

  @Prop() columnDefs: ColumnDef[] = [];

  @Prop() rowData = [];

  @Prop() height = '0';

  @Prop() preferRefresh?: boolean;

  gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    rowData: this.rowData,
    onGridReady(agGrid) {
      agGrid.api.sizeColumnsToFit();
    },
  };

  render() {
    return (
      <div
        id="myGrid"
        style={{
          height: this.height,
        }}
        class={this.darkMode || isDarkMode() ? 'ag-theme-alpine-dark' : 'ag-theme-alpine'}
      ></div>
    );
  }

  componentDidLoad() {
    // this.agGrid = this.el.shadowRoot.querySelector('#myGrid');
    this.agGrid = this.el.querySelector('#myGrid');
    new Grid(this.agGrid, this.gridOptions);
  }

  componentShouldUpdate(newValue, oldValue, key) {
    if (newValue !== oldValue) {
      if (key == 'columnDefs') {
        this.onColumnUpdates(newValue, oldValue);
      } else if (key == 'rowData') {
        this.onRowUpdates(newValue, oldValue);
      }
      return true;
    }
  }

  onColumnUpdates(colDefs, prevColDefs) {
    this.gridOptions.api.setColumnDefs(colDefs);
  }

  onRowUpdates(rowData, prevRowData) {
    // When the rowData prop updates
    // First, check if the rows are set first time
    if (prevRowData.length == 0 && rowData.length) {
      this.gridOptions.api.setRowData(rowData);
    }
    // check if should refresh cells instead,
    // see https://www.ag-grid.com/javascript-grid/view-refresh/
    else if (this.preferRefresh) {
      this.gridOptions.api.refreshCells();
    }
    // just set new rows
    else {
      this.gridOptions.api.setRowData(rowData);
    }
  }
}
