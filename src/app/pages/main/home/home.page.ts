import { Component, OnInit,inject} from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  
constructor(private router:Router){

}

  firebase = inject(FirebaseService)
  utilsvc = inject(UtilsService)

  user(): User{
    return this.utilsvc.getFromLocalStorage('user')
  
  }
  ngOnInit() {
  }

  //Cerrar Sesión
  signOut(){
    this.firebase.salir()
  }

  crearviaje(){
    this.router.navigate(['/manejar2'])
  }

  elegirviaje(){
    this.router.navigate(['/mapa'])
  }
  
  
}
