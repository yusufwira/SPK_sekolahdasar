import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  activeMenu: string;

  constructor(public user:UserService,public alertController: AlertController, private router: Router,public menu: MenuController) { 
   this.menu1Active();
 }

  ngOnInit():void {
    localStorage['username']=0;
    localStorage['nama']=0;
  }

  username="";
  password="";
  inputusername(event:any) {    
    this.username = event.target.value;    
   }

   inputpassword(event:any) {    
    this.password = event.target.value;    
   }

   login(){
   	this.user.username = this.username;
   	this.user.password = this.password;
   	this.user.Login().subscribe((data) => {      
        console.log(data);
        if(data.length == 0)
        {
        	this.peringatan();
        }
        else{
        	localStorage['username'] = this.username;
          console.log(data[0].nama_user)
          localStorage['nama'] = data[0].nama_user
        	this.router.navigate(['/home'])
        }
    });
   }


   peringatan(){
     const alert =  this.alertController.create({
      header: 'Login Gagal',
      message: 'Maaf Username dan Password salah',
      buttons: ['OK']
    }).then(alert=> alert.present());;
   }


   menu1Active() {
    this.activeMenu = 'menu1';
    this.menu.enable(false, 'menu1');   
  }
}
