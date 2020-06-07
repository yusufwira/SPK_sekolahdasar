import { Component, OnInit  } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HeaderColor } from '@ionic-native/header-color/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Halaman Utama',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'logo-buffer'
    },
    {
      title: 'Daftar Sekolah Dasar',
      url: '/daftarsekolah',
      icon: 'list-outline'
    },
    {
      title: 'Sistem Penunjang Keputusan',
      url: '/list',
      icon: 'cog'
    },
    {
      title: 'Keluar',
      url: '/login',
      icon: 'log-out'
    }
  ];

  activeMenu: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menu: MenuController
  ) {
    this.initializeApp();

  }


  ngOnInit() {
    console.log("this.username+this.nama")
  }

 
  nama:string;
  public username ="";
  public photo ="";
  public img ="";

   initializeApp():void {
  
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //localStorage['username'] =0;
      this.nama = localStorage['nama'];
      this.username = localStorage['username'];
      this.photo = localStorage['photo'];
      this.img = "http://localhost/ta_backend/Auth/profile/"+this.username+"/"+localStorage['photo']
    
     
     

     
    });
    //this.initializeApp();
  }


  menu1Active() {
    this.activeMenu = 'menu1';   
    this.menu.enable(false, 'menu2');
    console.log("fak")
    console.log(this.img)
  }
}
