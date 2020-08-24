import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, RouterStateSnapshot, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sekolah-create',
  templateUrl: './sekolah-create.component.html',
  styleUrls: ['./sekolah-create.component.scss'],
})
export class SekolahCreateComponent implements OnInit {

  constructor(private route: ActivatedRoute, public alertController: AlertController,private router: Router) { }

  ngOnInit() {}

  public nama="";
  inputNama(event:any) {    
    this.nama = event.target.value;    
   }

   public alamat="";
  inputAlamat(event:any) {    
    this.alamat = event.target.value;    
   }

   public telp="";
  inputTelp(event:any) {    
    this.telp = event.target.value;    
   }

  


   public kecamatan="";
   optionsKecamatan():void{
    let item = this.kecamatan;
    this.kecamatan = item;
  }

  public agama="";
   optionsAgama():void{
    let item = this.agama;
    this.agama = item;
  }

  public akreditasi="";
   optionsAkreditasi():void{
    let item = this.akreditasi;
    this.akreditasi = item;
  }

  public tahunAkre="";
   optionsTahunAkre():void{
    let item = this.tahunAkre;
    this.tahunAkre = item;
  }

  public kepalaSekolah="";
   inputKepalaSekolah(event:any) {    
    this.kepalaSekolah = event.target.value;    
   }

   public guru="";
   inputGuru(event:any) {    
    this.guru = event.target.value;    
   }

   public laki="";
   inputLaki(event:any) {    
    this.laki = event.target.value;    
   }

   public perempuan="";
   inputPerempuan(event:any) {    
    this.perempuan = event.target.value;    
   }

   public lulus="";
   inputSiswaLulus(event:any) {    
    this.lulus = event.target.value;    
   }

   public kurikulum="";
   inputKurikulum(event:any) {    
    this.kurikulum = event.target.value;    
   }

   public jam="";
   inputJamSekolah(event:any) {    
    this.jam = event.target.value;    
   }
   

  public dataArray:any;
  lanjut(){  
    var data = {
      nama:this.nama,
      alamat:this.alamat,
      telp:this.telp,
      kecamatan:this.kecamatan,
      agama:this.agama,
      akreditasi:this.akreditasi,
      tahunAkre:this.tahunAkre,
      kepalaSekolah: this.kepalaSekolah,
      guru: this.guru,
      laki:this.laki,
      perempuan:this.perempuan,
      lulus:this.lulus,
      kurikulum:this.kurikulum,
      jam:this.jam

    };


    let navigationExtras: NavigationExtras = {
      queryParams: {
          "data": JSON.stringify(data)
      }
    };

    this.dataArray = data;
    this.router.navigate(['/sekolah-create-a'], navigationExtras)
  }

}
