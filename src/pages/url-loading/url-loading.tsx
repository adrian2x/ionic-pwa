import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'url-loading',
  styleUrl: 'url-loading.css',
})
export class ViewLoading {
  @State() state = false;
  @Prop() name: string;

  formattedName(): string {
    if (this.name) {
      return this.name.substr(0, 1).toUpperCase() + this.name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Loading ...</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-progress-bar type="indeterminate"></ion-progress-bar>,

      <ion-content class="ion-padding">
        <div id="skeleton">
          <ion-list>
            <ion-list-header>
              <ion-label>
                <ion-skeleton-text animated style={{width: '20%'}}></ion-skeleton-text>
              </ion-label>
            </ion-list-header>
            <ion-item>
              <ion-avatar slot="start">
                <ion-skeleton-text animated></ion-skeleton-text>
              </ion-avatar>
              <ion-label>
                <h3>
                  <ion-skeleton-text animated style={{width: "50%"}}></ion-skeleton-text>
                </h3>
                <p>
                  <ion-skeleton-text animated style={{width: "80%"}}></ion-skeleton-text>
                </p>
                <p>
                  <ion-skeleton-text animated style={{width: "60%"}}></ion-skeleton-text>
                </p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-thumbnail slot="start">
                <ion-skeleton-text animated></ion-skeleton-text>
              </ion-thumbnail>
              <ion-label>
                <h3>
                  <ion-skeleton-text animated style={{width: "50%"}}></ion-skeleton-text>
                </h3>
                <p>
                  <ion-skeleton-text animated style={{width: "80%"}}></ion-skeleton-text>
                </p>
                <p>
                  <ion-skeleton-text animated style={{width: "60%"}}></ion-skeleton-text>
                </p>
              </ion-label>
            </ion-item>
            <ion-item>
              <ion-skeleton-text animated style={{width: '27px', height: "27px"}} slot="start"></ion-skeleton-text>
              <ion-label>
                <h3>
                  <ion-skeleton-text animated style={{width: "50%"}}></ion-skeleton-text>
                </h3>
                <p>
                  <ion-skeleton-text animated style={{width: "80%"}}></ion-skeleton-text>
                </p>
                <p>
                  <ion-skeleton-text animated style={{width: "60%"}}></ion-skeleton-text>
                </p>
              </ion-label>
            </ion-item>
          </ion-list>
        </div>
      </ion-content>,
    ];
  }
}
