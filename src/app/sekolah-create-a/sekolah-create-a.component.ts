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

  public ruangAc="semua";
  optionsAc():void{
    let item = this.ruangAc;
    this.ruangAc = item
    console.log(this.ruangAc);
  }


  listrik="ya";
  daya = false;
  optionsListrik():void{
    let item = this.listrik;
    this.listrik = item;
    console.log(this.listrik)
    if(this.listrik == "tidak"){
      this.daya = false;
    }
    else{
      this.daya = true;
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

  besar_bangunan="";
  inputLuasBangunan(event:any) {    
    this.besar_bangunan = event.target.value;    
  }

  luasTanah="";
  inputLuasTanah(event:any) {    
    this.luasTanah = event.target.value;    
  }

  jumlah_kelas_ac="";
  inputJumlahKelas_AC(event:any) {    
    this.jumlah_kelas_ac = event.target.value;   
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

  uang_gedung = "";
  display_uang_gedung = "";
  inputUangGedung(event:any){
    this.uang_gedung = event.target.value;  
    this.display_uang_gedung = this.formatRupiah(this.uang_gedung,"Rp. ");
  }

  uang_daftar_ulang = "";
  display_daftar_ulang = "";
  inputUangDaftarUlang(event:any){
    this.uang_daftar_ulang = event.target.value;  
    this.display_daftar_ulang = this.formatRupiah(this.uang_daftar_ulang,"Rp. ");
  }

  uang_spp = "";
  display_spp = "";
  inputUangSPP(event:any){
    this.uang_spp = event.target.value; 
    this.display_spp = this.formatRupiah(this.uang_spp,"Rp. "); 
  }

  uang_seragam = "";
  display_seragam = "";
  inputUangSeragam(event:any){
    this.uang_seragam = event.target.value;  
    this.display_seragam = this.formatRupiah(this.uang_seragam,"Rp. ");
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
  }

  public idSekolahs="";
  Create():void{  
    var data2 = {internet:this.internet, listrik:this.listrik, ruangAc:this.ruangAc, 
      dayaListrik:this.dayaListrik, luasTanah:this.luasTanah,besar_bangunan:this.besar_bangunan, 
      jumlahKelas:this.jumlahKelas,jumlah_kelas_ac:this.jumlah_kelas_ac, jumlahLab:this.jumlahLab, 
      jumlahPerpus:this.jumlahPerpus,uang_gedung:this.uang_gedung, uang_daftar_ulang:this.uang_daftar_ulang, 
      uang_spp:this.uang_spp, uang_seragam:this.uang_seragam, X:this.X, Y:this.Y, ket:this.ket};
    this.sekolah.userid = localStorage['iduser'];
    this.sekolah.data1 = this.data1;
    console.log(data2)
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



  formatRupiah(angka, prefix){
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
    split   		= number_string.split(','),
    sisa     		= split[0].length % 3,
    rupiah     		= split[0].substr(0, sisa),
    ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);
   
    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if(ribuan){
      var separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }
   
    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
  }


  // cobacoba(){
  //   this.sekolah.datafoto = this.datafoto;
  //   this.sekolah.idSekolah = "2";
  //   this.sekolah.uploudFoto().subscribe((data) => {      
  //     console.log(data);      
  //   });;
  // }

  

}
