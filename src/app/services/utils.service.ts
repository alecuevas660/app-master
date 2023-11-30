import { Injectable, inject } from '@angular/core';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraResultType , CameraSource} from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  loadingCtrl = inject(LoadingController)
  toastCtrl = inject(ToastController)
  router = inject(Router)
  loading() {
    return this.loadingCtrl.create({ spinner: 'crescent' })
  }


  

  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create({
      message: 'No hay ningún usuario registrado con esas credenciales',
      duration: 2000
    });
    toast.present();
  }

  async Toast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }


 




  //Enruta a cualquier página disponible
  routerLink(url: string) {
    return this.router.navigateByUrl(url)
  }

  //Guarda un elemento en localstorage
  saveInLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value))
  }
  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key))
  }


 

//=================CAMARA====================

 async takePicture (promptLabelHeader:string) {
  return await  Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Uri,
    source:CameraSource.Prompt,
    promptLabelHeader,
    promptLabelPhoto:'Seleccióna una foto',
    promptLabelPicture:'Toma una foto'
  });
}


}
