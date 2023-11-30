import { AlertController } from '@ionic/angular';
import { User } from '../models/user.model';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, of} from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

  public user$: Observable<User>;

  

  constructor(private firestore: AngularFirestore, public afAuth: AngularFireAuth, public AlertController: AlertController) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.firestore.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );

  }

/*  createDoc(data: any, path: string, id: string) {
    
    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);
}*/

createDocument<tipo>(data: tipo, enlace: string) {
  const itemsCollection: AngularFirestoreCollection<tipo> =
  this.firestore.collection<tipo>(enlace);
  return itemsCollection.add(data);
}

createViaje<tipo>(data: tipo, enlace: string, id: string) {
  const ref = this.firestore.collection<tipo>(enlace);
  return ref.doc(id).set(data);
}


  creatDoc(){
    this.firestore.collection('Clientes')
  }

 creatId(){
    return this.firestore.createId();
  }


  getCollection(){
    
    console.log('estoy por leer una coleccion');
    this.firestore.collection('Clientes').valueChanges().subscribe( (res) => {
      console.log('res ->', res);
  });
}

getCollectionChanges<tipo>(enlace:string) {
    const ref = this.firestore.collection<tipo>(enlace);
    return ref.valueChanges();
};

getDoc<tipo>(path: string, id:string ) {
  return this.firestore.collection(path).doc<tipo>(id).valueChanges()
}






}







