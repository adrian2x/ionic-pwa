import { Component, State, Listen, Element, Watch, h } from '@stencil/core';
import cx from 'classnames';

@Component({
  tag: 'url-home',
  styleUrl: 'url-home.css',
})
export class ViewHome {
  @Element() el: HTMLElement;
  @State() expandSearch = false;
  searchInput: HTMLIonSearchbarElement;

  @Listen('ionCancel')
  onSearchCancel(event) {
    this.expandSearch = false;
  }

  @Watch('expandSearch')
  watchHandler(newValue: boolean, oldValue: boolean) {
    console.log('watch:expandSearch', newValue);
    if (newValue) {
      setTimeout(() => {
        // Expanded search, should autoFocus
        this.searchInput.setFocus();
      }, 16);
    }
  }

  render() {
    const { expandSearch } = this;
    return (
      <ion-content>
        <ion-header>
          <ion-toolbar>
            {!expandSearch && [
              <ion-buttons slot="start">
                <ion-menu-toggle>
                  <ion-menu-button autoHide={false}></ion-menu-button>
                </ion-menu-toggle>
              </ion-buttons>,
              <ion-title>Header</ion-title>,
            ]}
            <ion-searchbar
              ref={input => {
                this.searchInput = input;
              }}
              class={cx('mobile-searchbar', !expandSearch && 'ion-hide')}
              inputMode="search"
              showCancelButton="always"
              cancelButtonText="Cancel"
            ></ion-searchbar>
            <ion-buttons slot="primary" class={cx(expandSearch && 'ion-hide')}>
              <div class="ion-hide-md-down">
                <ion-searchbar inputMode="search" animated={true} style={{ maxWidth: '375px' }}></ion-searchbar>
              </div>
              <ion-button
                fill="clear"
                class="ion-hide-md-up"
                onClick={() => {
                  this.expandSearch = true;
                }}
              >
                <ion-icon slot="icon-only" name="search"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <p>
            Welcome to the PWA Toolkit. You can use this starter to build entire apps with web components using Stencil and ionic/core! Check out the README for everything that
            comes in this starter out of the box and check out our docs on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
          </p>

          <ion-button href="/profile/ionic" expand="block">
            Profile page
          </ion-button>
        </ion-content>
      </ion-content>
    );
  }
}
