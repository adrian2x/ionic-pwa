import {alertController} from "@ionic/core";


export async function createAlert() {
  const alert = await alertController.create({
    header: 'Use this lightsaber?',
    message: 'Do you agree to use this lightsaber to do good across the galaxy?',
    buttons: ['Disagree', 'Agree']
  });

  await alert.present();
}
