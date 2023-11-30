import { UploadResult } from "firebase/storage";

export interface User {
    uid: string;
    email: string;
    password: string;
    name: string;
    rol: string;
 
}


export interface Viaje{
    rut:string;
    nombre:string;
    fono:string;
    partida:string;
    destino:string;
    valor:string;
    hora:string;
    id: string;

}
