import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../service/authenticate.service';
import { NavController } from '@ionic/angular';
import{Storage} from '@ionic/storage';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {
  registerForm:FormGroup;
  validation_messages={
    nombre:[
      {type:"required",message:"El nombre es requerido"},
      {type:"minlength",message:"Deben ser mas de 3 caracteres"}],
    apellido:[
      {type:"required",message:"El apellido es requerido"},
      {type:"minlength",message:"Deben ser mas de 3 caracteres"}],
    email:[
      {type:"required",message:"El email es requerido"},
      {type:"pattern",message:"ojo no es un email valido"}   
    ],
    password:[
      {type:"required",message:"El password es requerido"},
      {type:"minlength",message:"Deben ser mas de 5 caracteres"}   
    ]
  }
  errorMessage:string;
  constructor(private formBuilder:FormBuilder,
    private authService:AuthenticateService,
    private  navCtrl:NavController,
    private storge:Storage) {
    this.registerForm= this.formBuilder.group({
      nombre:new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      apellido:new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])),
      email:new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])),
      password:new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    })
   }

   register(userData){
     
     this.authService.register(userData).then(()=>{
      this.navCtrl.navigateBack("/login")
     })    
   }
   goToLogin(){
     this.navCtrl.navigateBack("/login")
   }

}
