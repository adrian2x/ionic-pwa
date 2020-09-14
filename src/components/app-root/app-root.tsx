import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-nav id="main" />
        <ion-menu content-id="main">
          <ion-header>
            <ion-toolbar color="primary">
              <ion-title>Menu</ion-title>
            </ion-toolbar>
          </ion-header>

          <ion-content>
            <ion-list>
              <ion-list-header>
                Navigation
              </ion-list-header>
              <ion-menu-toggle auto-hide="false">
                <ion-item button>
                  <ion-icon slot="start" name='home-sharp'></ion-icon>
                  <ion-label>
                    Home
                  </ion-label>
                </ion-item>
                <ion-item button href="/profile/ionic">
                  <ion-icon slot="start" name="information-circle-sharp"></ion-icon>
                  <ion-label>
                    About
                  </ion-label>
                </ion-item>
                <ion-item button href="/loading">
                  <ion-icon slot="start" name="cloud-download-sharp"></ion-icon>
                  <ion-label>
                    Loadable
                  </ion-label>
                </ion-item>
                <ion-item button href="/settings">
                  <ion-icon slot="start" name="settings-sharp"></ion-icon>
                  <ion-label>
                    Settings
                  </ion-label>
                </ion-item>
              </ion-menu-toggle>
            </ion-list>
          </ion-content>
        </ion-menu>
        <ion-router useHash={false}>
          <ion-route url="/" component="url-home" />
          <ion-route url="/settings" component="url-settings" />
          <ion-route url="/loading" component="url-loading" />
          <ion-route url="/profile/:name" component="url-profile" />
        </ion-router>
      </ion-app>
    );
  }
}
