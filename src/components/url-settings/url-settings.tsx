import { Component, Prop, State, h } from '@stencil/core';
import { createAlert } from '../alert-dialog/alert-dialog';
import { createModal } from "../page-modal/page-modal";

@Component({
  tag: 'url-settings',
  styleUrl: 'url-settings.css',
})
export class ViewSettings {
  @State() state = false;
  @State() checkbox = false;
  @Prop() name: string;

  formattedName(): string {
    if (this.name) {
      return this.name.substr(0, 1).toUpperCase() + this.name.substr(1).toLowerCase();
    }
    return '';
  }

  presentToast() {
    const toast = document.createElement('ion-toast');
    toast.message = 'Your settings have been saved.';
    toast.duration = 2000;

    document.body.appendChild(toast);
    return toast.present();
  }

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
        <p>
          Demos of common components.
        </p>

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
          <ion-checkbox checked={this.checkbox} onIonChange={ev => (this.checkbox = ev.detail.checked)} ></ion-checkbox>
        </ion-item>

        <ion-item>
          <ion-label>Select popover</ion-label>
          <ion-select id="customPopoverSelect" interface="popover" interfaceOptions={{showBackdrop: false}} placeholder="Select One">
            <ion-select-option value="brown">Brown</ion-select-option>
            <ion-select-option value="blonde">Blonde</ion-select-option>
            <ion-select-option value="black">Black</ion-select-option>
            <ion-select-option value="red">Red</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item>
          <ion-label>Show toast</ion-label>
          <ion-button onClick={this.presentToast}>
            Toast
          </ion-button>
        </ion-item>

        <ion-item>
          <ion-label>Show modal dialog</ion-label>
          <ion-button onClick={createModal}>
            Modal
          </ion-button>
        </ion-item>

        <ion-item>
          <ion-label>Show alert</ion-label>
          <ion-button onClick={createAlert}>
            Alert
          </ion-button>
        </ion-item>
      </ion-content>,
    ];
  }
}
