import {modalController} from "@ionic/core";

customElements.define('modal-content', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header>
        <ion-toolbar>
          <ion-title>Modal Header</ion-title>
          <ion-buttons slot="primary">
            <ion-button class="btn-dismiss">
              <ion-icon slot="icon-only" name="close"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        Modal Content
      </ion-content>`;
    let closeBtn = this.querySelector( ".btn-dismiss" );
    closeBtn.addEventListener('click', dismissModal);
  }
});


let currentModal = null;

export async function createModal() {
  const modal = await modalController.create({
    component: 'modal-content'
  });

  await modal.present();
  currentModal = modal;
}

export function dismissModal() {
  if (currentModal) {
    currentModal.dismiss().then(() => { currentModal = null; });
  }
}
