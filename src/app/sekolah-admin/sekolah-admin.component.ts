import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SekolahService } from '../sekolah.service';

@Component({
  selector: 'app-sekolah-admin',
  templateUrl: './sekolah-admin.component.html',
  styleUrls: ['./sekolah-admin.component.scss'],
})
export class SekolahAdminComponent implements OnInit {

  constructor(public alertController: AlertController, public sekolah:SekolahService) { }

  public dataSekolah= [];
  public jumlah_sekolah="";
  ngOnInit() {
    this.sekolah.ListSekolah().subscribe((data) => {    
     this.dataSekolah = data;
     this.jumlah_sekolah= data[0].jumlah
     console.log(this.dataSekolah);     
     //console.log(data[0].jumlah);       
    });
  }

  search ="";
  inputsearch(event:any) {    
    this.search = event.target.value; 
    console.log(this.search)  
    this.sekolah.Search(this.search).subscribe((data) => {    
      this.dataSekolah = data;     
      console.log(this.dataSekolah);     
     }); 
   }

  peringatan(id){
    const alert =  this.alertController.create({
     header: 'Peringatan Penghapusan Sekolah',
     message: 'Semua data menengenai sekolah dan hal berhubungan dengan sekolah akan terhapus',
     buttons: [
      {
        text: 'Cancel',        
      }, {
        text: 'Okay',
        handler: () => {
           this.sekolah.Delete(id).subscribe((data) => {               
            console.log(data);   
            if(data == "sukses"){
              this.peringatan_selesai();
            }
           }); 
        }
      }
    ]
   }).then(alert=> alert.present());;
  }


  peringatan_selesai(){
    const alert =  this.alertController.create({
     header: 'SUKSES',
     message: 'Data sekolah berhasil terhapus',
     buttons: [
      {
        text: 'Okay',
        handler: () => {
           this.ngOnInit()
        }
      }
    ]
   }).then(alert=> alert.present());;
  }

}
