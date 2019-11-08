import { Component, ɵConsole } from '@angular/core';
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
  song={};
  currentSong={};
  newTime;

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
  play(){
    console.log(this.song)
    this.currentSong = new Audio(this.song.preview_url);
    this.currentSong.play();
    console.log(this.currentSong);
    this.currentSong.addEventListener("timeupdate",()=>{
      this.newTime=(this.currentSong.currentTime *(this.currentSong.duration/10))/100
    });
    this.song.playing=true;
  }
  pause(){
    this.currentSong.pause();
    this.song.playing=false;
  }

  parseTime(time="0.00"){
    if(time){
      const partTime=parseInt(time.toString().split(".")[0],10)
      let minutes=Math.floor(partTime/60).toString();

      if(minutes.length==1){
        minutes="0" + minutes;
      }
      let seconds=(partTime%60).toString();
      if(seconds.length==1){
        seconds="0" +seconds;
      }
      return minutes +":" +seconds;
    }
  }
  

}
