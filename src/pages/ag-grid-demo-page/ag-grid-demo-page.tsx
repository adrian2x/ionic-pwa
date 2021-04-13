import { Component, Prop, State, h } from '@stencil/core';
import { ColumnDef } from '../../components/ag-grid/ag-grid';

@Component({
  tag: 'ag-grid-demo-page',
  styleUrl: 'ag-grid-demo-page.css',
})
export class AgGridDemoPage {
  @State() rowState = [];
  @Prop() name: string;

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Ag-Grid demo</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ag-grid
          height="500px"
          columnDefs={
            [
              { headerName: 'Make', field: 'make', filter: 'agTextColumnFilter', sortable: true, resizable: true },
              { headerName: 'Model', field: 'model', filter: 'agTextColumnFilter', sortable: true, resizable: true },
              { headerName: 'Price', field: 'price', filter: 'agNumberColumnFilter', type: 'numericColumn', sortable: true, resizable: true },
            ] as ColumnDef[]
          }
          rowData={this.rowState}
        ></ag-grid>
      </ion-content>,
    ];
  }

  componentDidLoad() {
    // Simulate loading rows dynamically
    setTimeout(() => {
      this.rowState = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
      ];
    }, 3000);
  }
}
