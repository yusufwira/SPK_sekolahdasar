import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SekolahService } from '../sekolah.service';

@Component({
  selector: 'app-sekolah-create-a',
  templateUrl: './sekolah-create-a.component.html',
  styleUrls: ['./sekolah-create-a.component.scss'],
})
export class SekolahCreateAComponent implements OnInit {

  constructor(private route: ActivatedRoute, public sekolah:SekolahService, public alertController: AlertController,private router: Router) { }

  public arrays:any;
  username="";
  data1:any;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const data = JSON.parse(params["data"]);
      this.data1 = data;
      console.log(data);
   });
   this.username= localStorage['username'];
   
  }

  internet="";
  optionsInternet():void{
    let item = this.internet;
    this.internet = item
    console.log(this.internet);
  }

  public ruangAc="";
  optionsAc():void{
    let item = this.ruangAc;
    this.ruangAc = item
    console.log(this.ruangAc);
  }


  listrik="";
  daya = false;
  optionsListrik():void{
    let item = this.listrik;
    this.listrik = item;
    console.log(this.listrik)
    if(this.listrik == "ya"){
      this.daya = true;
    }
    else{
      this.daya = false;
    }
  }

  file: File;
  img1="";
  img2="";
  img3="";
  img4="";
  public datafoto = [];
  changeListener($event, jenis) : void{
    this.file = $event.target.files[0];
    this.sekolah.file = this.file;
    this.sekolah.username = this.username;
    this.sekolah.upload().subscribe((data) => {              
      if(jenis == "1"){
        this.img1 = data['link'];
        var foto ={nama:data['name'],ext:data['ext']}
        this.datafoto.push(foto);
      }
      else if(jenis == "2"){
        this.img2 = data['link'];
        var foto ={nama:data['name'],ext:data['ext']}
        this.datafoto.push(foto);
      }
      else if(jenis == "3"){
        this.img3 = data['link'];
        var foto ={nama:data['name'],ext:data['ext']}
        this.datafoto.push(foto);
      }
      else{
        this.img4 = data['link'];
        var foto ={nama:data['name'],ext:data['ext']}
        this.datafoto.push(foto);
      }
    });
    console.log(this.datafoto)
  }


  dayaListrik ="";
  inputDayaListrik(event:any) {    
    this.dayaListrik = event.target.value;    
  }

  luasTanah="";
  inputLuasTanah(event:any) {    
    this.luasTanah = event.target.value;    
  }

  jumlahKelas="";
  inputJumlahKelas(event:any) {    
    this.jumlahKelas = event.target.value;    
  }

  jumlahLab="";
  inputJumlahLab(event:any) {    
    this.jumlahLab = event.target.value;    
  }

  jumlahPerpus="";
  inputPerpus(event:any) {    
    this.jumlahPerpus = event.target.value;    
  }

  X="";
  inputX(event:any) {    
    this.X = event.target.value;    
  }

  Y="";
  inputY(event:any) {    
    this.Y = event.target.value;    
  }

  ket="";
  inputKeterangan(event:any) {    
    this.ket = event.target.value;  
    console.log(this.ket);  
  }

  public idSekolahs="";
  Create():void{  
    var data2 = {internet:this.internet, listrik:this.listrik, ruangAc:this.ruangAc, dayaListrik:this.dayaListrik, luasTanah:this.luasTanah, jumlahKelas:this.jumlahKelas, jumlahLab:this.jumlahLab, jumlahPerpus:this.jumlahPerpus, X:this.X, Y:this.Y, ket:this.ket};
    this.sekolah.userid = localStorage['iduser'];
    this.sekolah.data1 = this.data1;
    this.sekolah.data2 = data2;
    this.sekolah.datafoto = this.datafoto;
    this.sekolah.Create().subscribe((data) => {      
      this.idSekolahs = data;     
      this.sekolah.idSekolah = this.idSekolahs;
      this.sekolah.uploudFoto().subscribe((data) => {    
        this.router.navigate(['/sekolah-create-b',this.idSekolahs])               
      });       
    });
   
    
  }


  // cobacoba(){
  //   this.sekolah.datafoto = this.datafoto;
  //   this.sekolah.idSekolah = "2";
  //   this.sekolah.uploudFoto().subscribe((data) => {      
  //     console.log(data);      
  //   });;
  // }

  

}