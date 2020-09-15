import { toastController } from '@ionic/core';

export async function presentToast() {
  const toast = await toastController.create({
    message: 'Your settings have been saved.',
    duration: 2000,
  });
  toast.present();
}

export async function presentToastWithOptions() {
  const toast = await toastController.create({
    header: 'Toast header',
    message: 'Click to Close',
    position: 'top',
    buttons: [
      {
        side: 'start',
        icon: 'star',
        text: 'Favorite',
        handler: () => {
          console.log('Favorite clicked');
        },
      },
      {
        text: 'Done',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        },
      },
    ],
  });
  toast.present();
}
