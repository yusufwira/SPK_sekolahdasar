import { Component } from '@angular/core';
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
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'logo-buffer'
    },
    {
      title: 'Daftar Sekolah',
      url: '/list',
      icon: 'list-box'
    },
    {
      title: 'Sistem Penunjang Keputusan',
      url: '/list',
      icon: 'cog'
    },
    {
      title: 'Logout',
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
  nama:string;

   initializeApp() {
  
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.nama = localStorage['nama']
     
    });
  }


  menu1Active() {
    this.activeMenu = 'menu1';   
    this.menu.enable(false, 'menu2');
    console.log("fak")
  }
}
