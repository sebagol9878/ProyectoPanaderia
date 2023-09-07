import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.page.html',
  styleUrls: ['./resetpass.page.scss'],
})
export class ResetpassPage {
  email: string = '';

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {}

  enviarCorreo() {

    this.mostrarToast('Ha recibido un correo electrónico con un enlace para restablecer su contraseña.');
  }

  async mostrarToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 5000, 
      position: 'top',
    });
    await toast.present();
  }
}
