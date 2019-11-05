import { Component } from '@angular/core';
import { PlatzimusicService } from '../service/platzimusic.service';
import { ModalController } from '@ionic/angular';
import { SongsModalPage } from '../songs-modal/songs-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  artists:any[]=[];
  songs:any[]=[];
  albums:any[]=[];
  song={}

  slidesOps={
    initialSlide:2,
    slidesPerView:4,
    centeredSlides:true,
    speed: 400
  }
  
  constructor(private musicService:PlatzimusicService,private modalController:ModalController) {}

  ionViewDidEnter(){
    this.musicService.getNewReleases().then((newReleases)=>{
      this.artists=this.musicService.getArtists();
      this.songs=newReleases.albums.items.filter(e=>e.album_type="single")
      this.albums=newReleases.albums.items.filter(e=>e.album_type="album")
    })
  }

  async showSongs(artist){
    console.log(artist.id)
    const songs= await this.musicService.getArtistTopTracks(artist.id);
    const modal=await this.modalController.create({
      component:SongsModalPage,
      componentProps:{
        songs:songs.tracks,
        artist:artist.name
      }
    });
    modal.onDidDismiss().then(dataReturned=>{
      this.song=dataReturned.data;
    })
    return await modal.present();
  }

}
