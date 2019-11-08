import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  constructor(private storage:Storage) { }
 async loginUser(credenciales){
  const user=await this.storage.get('user');
    return new Promise((accept,reject)=>{
      if(credenciales.email==user.email && btoa(credenciales.password)==user.password){
        accept("login correcto");
        
      } else{
        reject("login incorrecto");
      }
    });
  }
  register(userData){
    userData.password=btoa(userData.password);
    return this.storage.set('user',userData)
  }
}
