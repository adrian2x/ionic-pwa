import { Component, Prop, State, h } from '@stencil/core';
import { presentAlert, presentAlertConfirm, presentAlertPrompt } from '../alert-factory/alert-factory';
import { ModalFactory } from '../modal-factory/modal-factory';
import { presentToast, presentToastWithOptions } from '../toast-factory/toast-factory';

@Component({
  tag: 'url-settings',
  styleUrl: 'url-settings.css',
})
export class ViewSettings {
  @State() state = false;
  @State() checkbox = false;
  @State() alertType: Function = presentAlert;
  @Prop() name: string;

  formattedName(): string {
    if (this.name) {
      return this.name.substr(0, 1).toUpperCase() + this.name.substr(1).toLowerCase();
    }
    return '';
  }

  triggerAlert = () => {
    this.alertType();
  };

  selectAlertType = event => {
    this.alertType = event.target.value;
  };

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Settings</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>Demos of common components.</p>

        <ion-item>
          <ion-label>Email input</ion-label>
          <ion-input type="email" placeholder="email address"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked">Stacked Label</ion-label>
          <ion-input placeholder="Enter your query..."></ion-input>
        </ion-item>

        <ion-item>
          <ion-label>Numeric input</ion-label>
          <ion-input type="number" placeholder="Year"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label>Toggles</ion-label>
          <ion-toggle checked={this.state} onIonChange={ev => (this.state = ev.detail.checked)} />
        </ion-item>

        <ion-item>
          <ion-label>Checkbox</ion-label>
          <ion-checkbox checked={this.checkbox} onIonChange={ev => (this.checkbox = ev.detail.checked)}></ion-checkbox>
        </ion-item>

        <ion-item>
          <ion-label>
            Native select
          </ion-label>
          <select>
            <option value="">One</option>
            <option value="">Two</option>
            <option value="">Three</option>
            <option value="">Four</option>
          </select>
        </ion-item>

        <ion-item>
          <ion-label>
            Select popover
            <ion-badge slot="end">New</ion-badge>
          </ion-label>
          <ion-select interface="popover" placeholder="Select One">
            <ion-select-option value="brown">Brown</ion-select-option>
            <ion-select-option value="blonde">Blonde</ion-select-option>
            <ion-select-option value="black">Black</ion-select-option>
            <ion-select-option value="red">Red</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>Show toast</ion-label>
          <ion-button onClick={presentToast}>Toast</ion-button>
          <ion-button onClick={presentToastWithOptions}>Toast options</ion-button>
        </ion-item>

        <ion-item>
          <ion-label>Show modal dialog</ion-label>
          <ion-button onClick={() => ModalFactory.presentModal('modal-dialog')}>Modal</ion-button>
        </ion-item>

        <ion-item>
          <ion-label>Show alert</ion-label>
          <ion-select id="alertTypeSelect" interface="popover" interfaceOptions={{ showBackdrop: false }} placeholder="Alert type" onIonChange={this.selectAlertType}>
            <ion-select-option value={presentAlert}>Static</ion-select-option>
            <ion-select-option value={presentAlertConfirm}>Confirmation</ion-select-option>
            <ion-select-option value={presentAlertPrompt}>Prompt</ion-select-option>
          </ion-select>
          <ion-button onClick={this.triggerAlert}>Alert</ion-button>
        </ion-item>
      </ion-content>,
    ];
  }
}
