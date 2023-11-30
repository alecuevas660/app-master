import { Viaje } from 'src/app/models/user.model';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Component, OnInit,inject } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-misviajes',
  templateUrl: './misviajes.page.html',
  styleUrls: ['./misviajes.page.scss'],
})
export class MisviajesPage implements OnInit {
  
  viajes:Viaje [] = [];

  firebase = inject(FirebaseService)
  utilsvc = inject(UtilsService)
  constructor(public FirestoreService: FirestoreService) { }

  ngOnInit() {
    this.getViajes();
  }
  user(): User{
    return this.utilsvc.getFromLocalStorage('user')
  
  }

  getViajes(){
    const enlace = 'Viajes'
    this.FirestoreService.getCollectionChanges<Viaje>(enlace).subscribe( res => {
      this.viajes = res;

    });
  }

}



