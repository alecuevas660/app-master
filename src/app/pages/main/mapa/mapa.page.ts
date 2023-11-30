import { Viaje } from 'src/app/models/user.model';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Component, OnInit, inject } from '@angular/core';
import { async } from '@firebase/util';
import { AlertController, ToastController } from '@ionic/angular';
import { CrudService } from 'src/app/services/crud.service';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  utilsvc = inject(UtilsService)



  viajes:Viaje [] = [];
  pasajeros: number = 0;
  
  constructor(private crud: CrudService, private toast:ToastController, public alertController: AlertController,
    public FirestoreService: FirestoreService) { }

  ngOnInit() { 
    this.getViajes();
  }

  user(): User{
    return this.utilsvc.getFromLocalStorage('user')
  
  }
  async agregarViaje(){
    this.pasajeros++;
    if(this.pasajeros > 4)
    {this.presentAlert(); }
    
    let alerta = await this.alertController.create({

      header: "Viaje reservado ✔️",
      buttons: [{
        text: "Aceptar",

      }
    ]
      
    });
    await alerta.present();
    console.log("viaje agregauw");

  }
async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Important message',
    message: 'This is an alert!',
    buttons: ['OK'],
  });
}
  getViajes(){
    const enlace = 'Viajes'
    this.FirestoreService.getCollectionChanges<Viaje>(enlace).subscribe( res => {
      this.viajes = res;

    });
  } 
  







}
