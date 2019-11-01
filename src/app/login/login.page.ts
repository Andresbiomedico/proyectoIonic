import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../service/authenticate.service';
import { NavController } from '@ionic/angular';
import{Storage} from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:FormGroup;
  validation_messages={
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
    this.loginForm= this.formBuilder.group({
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

  ngOnInit() {}
  loginUser(credenciales){
    this.authService.loginUser(credenciales).then(res=>{
      this.errorMessage="";
      this.storge.set('isUserLoggedIn',true)
      this.navCtrl.navigateForward("/home")
    }).catch(err=>{
      this.errorMessage=err;
    })
    
  }

}
