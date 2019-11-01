import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  loginUser(credenciales){
    return new Promise((accept,reject)=>{
      if(credenciales.email=="an@dre.com" && credenciales.password=="12345"){
        accept("login correcto");
        
      } else{
        reject("login incorrecto");
      }
    });
  }
}
