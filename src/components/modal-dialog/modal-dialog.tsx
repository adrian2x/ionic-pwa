import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'modal-dialog',
  styleUrl: 'modal-dialog.css',
})
export class ModalDialog {
  @Element() el: any;

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Modal Header</ion-title>
          <ion-buttons slot="primary">
            <ion-button onClick={this.dismiss}>
              <ion-icon slot="icon-only" name="close"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content class="ion-padding">
        <ion-list>
          <ion-item>
            <ion-label>Documentation</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Feedback</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Settings</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>,
    ];
  }

  dismiss = () => {
    // dismiss the closest modal and optionally pass back data
    (this.el.closest('ion-modal') as any).dismiss({
      dismissed: true,
    });
  };
}
