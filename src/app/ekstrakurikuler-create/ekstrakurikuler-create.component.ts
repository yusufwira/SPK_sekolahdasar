import { Component, OnInit } from '@angular/core';
import { EkstrakurikulerService } from '../ekstrakurikuler.service';
import { AlertController } from '@ionic/angular';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ekstrakurikuler-create',
  templateUrl: './ekstrakurikuler-create.component.html',
  styleUrls: ['./ekstrakurikuler-create.component.scss'],
})
export class EkstrakurikulerCreateComponent implements OnInit {

  constructor(public eks:EkstrakurikulerService,public alertController: AlertController,private router: Router) { }

  ngOnInit() {}

  nama="";
  deskripsi="";
  inputnama(event:any) {    
    this.nama = event.target.value;    
   }


   inputdesc(event:any) {    
    this.deskripsi = event.target.value;    
   }

   Save(){
     this.eks.nama = this.nama;
     this.eks.desc = this.deskripsi;
     this.eks.inputEkstra().subscribe((data) => {      
      //console.log(data)
      if(data == "sudah"){
        this.peringatan('Save Failed', 'Data has arrived at the database'); 
      }
      else{
        this.peringatan('Save Success', 'Data has been in save'); 
      }
                    
    });
     //console.log(this.nama+this.deskripsi)
   }


   peringatan(headers, data){
    const alert =  this.alertController.create({
     header: headers,
     message: data,
     buttons: [{
      text: 'Okay',
      handler: () => {
        this.router.navigate(['/ekstrakurikuler-admin'])
      }
     }]
   }).then(alert=> alert.present());;
  }

}
