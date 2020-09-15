import { Component, Prop, h } from '@stencil/core';
import { sayHello } from '../../helpers/utils';
import state from '../../global/store';

@Component({
  tag: 'url-profile',
  styleUrl: 'url-profile.css',
})
export class ViewProfile {
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
          <ion-title>Profile: {this.name}</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          {sayHello()}! My name is {this.formattedName()}. My name was passed in through a route param!
        </p>
        <p>
          I also receive state from a store. You can play with the counter below
        </p>

        <div>
          <ion-button onClick={() => state.clicks--}>-1</ion-button>
            <ion-label>Value: {state.clicks}</ion-label>
          <ion-button onClick={() => state.clicks++}>+1</ion-button>
        </div>

      </ion-content>,
    ];
  }
}
