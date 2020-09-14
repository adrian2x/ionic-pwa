import { Component, h } from '@stencil/core';

@Component({
  tag: 'url-home',
  styleUrl: 'url-home.css',
})
export class ViewHome {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-menu-toggle>
              <ion-button>
                <ion-icon slot="icon-only" name="menu"></ion-icon>
              </ion-button>
            </ion-menu-toggle>
          </ion-buttons>
          <ion-title>Header</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          Welcome to the PWA Toolkit. You can use this starter to build entire apps with web components using Stencil and ionic/core! Check out the README for everything that comes
          in this starter out of the box and check out our docs on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <ion-button href="/profile/ionic" expand="block">
          Profile page
        </ion-button>
      </ion-content>,
    ];
  }
}
