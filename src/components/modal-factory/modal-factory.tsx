import { Component, Prop } from '@stencil/core';

import { modalController } from '@ionic/core';

@Component({
  tag: 'modal-factory',
  styleUrl: 'modal-factory.css',
})
export class ModalFactory {
  @Prop() component: string;
  @Prop() cssClass: string;

  async presentModal() {
    const modal = await modalController.create({
      component: this.component,
      cssClass: this.cssClass,
      componentProps: {},
      swipeToClose: true,
      // presentingElement: this.el.closest('ion-router-outlet'),
    });
    await modal.present();
  }

  static async presentModal(component: string, cssClass?: string) {
    const modal = await modalController.create({
      component: component,
      cssClass: cssClass,
      componentProps: {},
      swipeToClose: true,
      // presentingElement: this.el.closest('ion-router-outlet'),
    });
    await modal.present();
  }
}
