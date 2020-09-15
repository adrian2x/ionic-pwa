import { alertController } from '@ionic/core';

export async function presentAlert() {
  const alert = await alertController.create({
    cssClass: 'my-custom-class',
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'This is an alert message.',
    buttons: ['OK', 'Cancel'],
  });

  await alert.present();
}

export async function presentAlertConfirm() {
  const alert = await alertController.create({
    cssClass: 'my-custom-class',
    header: 'Confirm!',
    message: 'Message <strong>text</strong>!!!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel: ', arguments);
        },
      },
      {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
        },
      },
    ],
  });

  await alert.present();
}

export async function presentAlertPrompt() {
  const alert = await alertController.create({
    cssClass: 'my-custom-class',
    header: 'Prompt!',
    inputs: [
      {
        name: 'name1',
        type: 'text',
        placeholder: 'Placeholder 1',
      },
      {
        name: 'name2',
        type: 'text',
        id: 'name2-id',
        value: 'hello',
        placeholder: 'Placeholder 2',
      },
      // multiline input.
      {
        name: 'paragraph',
        id: 'paragraph',
        type: 'textarea',
        placeholder: 'Placeholder 3',
      },
      {
        name: 'name3',
        value: 'http://ionicframework.com',
        type: 'url',
        placeholder: 'Favorite site ever',
      },
      // input date with min & max
      {
        name: 'name4',
        type: 'date',
        min: '2017-03-01',
        max: '2018-01-12',
      },
      // input date without min nor max
      {
        name: 'name5',
        type: 'date',
      },
      {
        name: 'name6',
        type: 'number',
        min: -5,
        max: 10,
      },
      {
        name: 'name7',
        type: 'number',
      },
      {
        name: 'name8',
        type: 'password',
        placeholder: 'Advanced Attributes',
        cssClass: 'specialClass',
        attributes: {
          maxlength: 4,
          inputmode: 'decimal',
        },
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        },
      },
      {
        text: 'Ok',
        handler: () => {
          console.log('Confirm Ok');
        },
      },
    ],
  });

  await alert.present();
}
