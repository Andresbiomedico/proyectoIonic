import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400
  };

  slides=[{
    imageSrc:"assets/img/logo.png",
    imageAlt:"Platzi Music Logo",
    title:"Escucha tu musica",
    subTitle:"EN CUALQUIER LUGAR",
    description:"Los mejores albunes, las mejores cancione.Escucha y comparte en cualquier momento a todas horas",
    icon:"play"
  },
  {
    imageSrc:"assets/img/logo.png",
    imageAlt:"Platzi Music Logo",
    title:"Disfruta de nuestro reproductor",
    subTitle:"DE VIDEOS INCREIBES",
    description:"Entra al modo video de nuestro reproductor y obten acceso a tips documentales y making offs increibles de tu artista favorito",
    icon:"camera"},
    {
      imageSrc:"assets/img/logo.png",
      imageAlt:"Platzi Music Logo",
      title:"Accede al exclusivo",
      subTitle:"MODO DEPORTE",
      description:"Crea un playist basada en tu actividad fisica Ten reportes y acceso a lo que necesites integrado con GPS!",
      icon:"bicycle"
    }]
  constructor() { }
  
  ngOnInit() {
  }

}
