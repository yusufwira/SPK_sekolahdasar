import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { SekolahService } from '../sekolah.service';
import {Map,tileLayer,marker} from 'leaflet';

@Component({
  selector: 'app-sekolah-view',
  templateUrl: './sekolah-view.component.html',
  styleUrls: ['./sekolah-view.component.scss'],
})
export class SekolahViewComponent implements OnInit {

  constructor(public sekolah:SekolahService,private route: ActivatedRoute,public alertController: AlertController, private router: Router,public menu: MenuController) { }

  arr_foto:any;
  arr_eks:any;
  nama_sekolah="";
  alamat="";
  no_telp="";
  agama ="";
  kepala_sekolah="";
  akreditasi ="";
  tahun_akreditasi="";
  kurikulum="";
  jam="";
  j_guru="";
  j_laki="";
  j_perempuan="";

  internet="";
  ac="";
  listrik="";
  daya_listrik="";
  luas_tanah="";
  jumlah_kelas="";
  jumlah_lab="";
  jumlah_perpus="";

  username="";
  id_sekolah= "";

  map:Map;
  newMarker:any;
  address:string[];

  arr_komen:any;
  ratings=0.0;
  ngOnInit(){    
    this.sekolah.id = this.route.snapshot.params['id'];
    this.sekolah.DetailSekolah().subscribe((data) => {    
      //console.log(data);
      this.id_sekolah = data['idinfo_sekolah'];
      this.nama_sekolah = data['nama_sekolah'];
      this.alamat = data['alamat_sekolah'];
      this.no_telp = data['notelp_sekolah'];

      this.agama = data['agama'];
      this.kepala_sekolah = data['nama_kepala_sekolah'];
      this.akreditasi = data['akreditasi'];
      this.tahun_akreditasi = data['tahun_akreditasi'];
      this.kurikulum = data['kurikulum'];
      this.jam = data['jam_sekolah'];
      this.j_guru = data['jumlah_guru'];
      this.j_laki = data['jumlah_siswa_laki'];
      this.j_perempuan= data['jumlah_siswa_perempuan'];

      this.internet = data['internet'];
      this.ac = data['ruang_ac'];
      this.listrik = data['listrik'];
      this.daya_listrik = data['daya_listrik'];
      this.luas_tanah = data['luas_tanah'];
      this.jumlah_kelas = data['jumlah_kelas'];
      this.jumlah_lab = data['jumlah_laboratorium'];
      this.jumlah_perpus = data['jumlah_perpustakaan']
      
      this.username = data['username'];
      this.arr_foto = data['foto'];
      this.loadmap(data['koordinat_X'],data['koordinat_Y'],this.nama_sekolah);
      //console.log(this.arr_foto);  
      this.sekolah.GetRating(this.id_sekolah).subscribe((data) => { 
        var hasil = +data['hasil'];
        var jumlah = +data['jumlah'];      
        this.ratings = hasil/jumlah;
        console.log(this.ratings);                      
      });          
    });

    this.sekolah.DetailEkstra().subscribe((data) => {        
      this.arr_eks = data;                      
    });

    this.getReview();
   
    
  }

  getReview(){
    this.sekolah.GetReview().subscribe((data) => {        
      this.arr_komen = data;
      console.log(this.arr_komen);                      
    });
  }

   
  

  loadmap(x,y,nama){
     this.map = new Map("mapId").setView([x,y], 13);
     tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
     { attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY- SA</a>'})
     .addTo(this.map); // This line is added to add the Tile Layer to our map
     this.locatePosition(x,y,nama);
  }

  locatePosition(x,y, nama){
    this.map.locate({setView:true}).on("locationfound", (e: any)=> {
      

       this.newMarker = marker([x,y], {autoPan: 
        true}).addTo(this.map);
        this.newMarker.bindPopup(nama).openPopup();
        //this.getAddress(e.latitude, e.longitude); // This line is added
        this.newMarker.on("dragend", ()=> {
          const position = this.newMarker.getLatLng();
          //this.getAddress(position.lat, position.lng);
         });


        //  var markerFrom = marker([e.latitude,e.longitude]);
        //  var markerTo =  marker([-7.2677567,112.8034008]);
        //  var from = markerFrom.getLatLng();
        //  var to = markerTo.getLatLng();
         //this.getDistance(from, to);
    });
  }

  rating1=false;
  rating2=false;
  rating3=false;
  rating4=false;
  rating5=false;
  rating(number):void{
    console.log(number);
    if(number == 1){
      this.rating1 = true;
      this.rating2=false;
      this.rating3=false;
      this.rating4=false;
      this.rating5=false
    }
    else if (number == 2){
      this.rating1 = true;
      this.rating2= true;
      this.rating3=false;
      this.rating4=false;
      this.rating5=false
    }
    else if (number == 3){
      this.rating1 = true;
      this.rating2= true;
      this.rating3=true;
      this.rating4=false;
      this.rating5=false
    }
    else if (number == 4){
      this.rating1 = true;
      this.rating2= true;
      this.rating3=true;
      this.rating4=true;
      this.rating5=false
    }
    else if (number == 5){
      this.rating1 = true;
      this.rating2= true;
      this.rating3=true;
      this.rating4=true;
      this.rating5=true
    }
    var id_user = localStorage['iduser'];
    this.sekolah.Rating(this.id_sekolah,id_user,number).subscribe((data) => {    
      console.log(data); 
      this.peringatan();           
    });

  }

  public komentar="";
  inputKomen(event:any) {    
    this.komentar = event.target.value;
    //console.log(this.komentar)    
   }

   kirimKomentar():void{
    var id_user = localStorage['iduser'];
    this.sekolah.Review(this.id_sekolah,id_user,this.komentar).subscribe((data) => {    
      console.log(data);  
      this.getReview();          
    });
    
   }


   peringatan(){
    const alert =  this.alertController.create({
     header: 'Terima Kasih',
     message: 'Anda sudah memberikan rating pada sekolah ini',
     buttons: ['OK']
   }).then(alert=> alert.present());;
  }

 

}
