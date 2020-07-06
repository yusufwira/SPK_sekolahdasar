import { Component, OnInit } from '@angular/core';
import { SekolahService } from '../sekolah.service'
import { AlertController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sekolah-update',
  templateUrl: './sekolah-update.component.html',
  styleUrls: ['./sekolah-update.component.scss'],
})
export class SekolahUpdateComponent implements OnInit {

  constructor(private route: ActivatedRoute, public sekolah:SekolahService, public alertController: AlertController,private router: Router) { }

  public datas: Object;
  public nama_sekolah ="";
  public alamat_sekolah= "";
  public telp ="";
  public kecamatan = "";
  public agama = "";
  public akreditasi = "";
  public tahun_akreditasi ="";
  public nama_kepala_sekolah ="";
  public guru = "";
  public siswa_laki ="";
  public siswa_perempuan ="";
  public kurikuklum = "";
  public jam_sekolah= "";
  public internet = "";
  public ruangAc = "";
  public listrik = "";
  public daya_listrik = "";
  public luas_tanah = "";
  public kelas = "";
  public lab = "";
  public perpus = "";
  public X = "";
  public Y = "";
  public keterangan = "";

  ngOnInit() {
    this.sekolah.id =this.route.snapshot.params['id'];
    this.sekolah.GetInformasiSekolah(this.sekolah.id).subscribe((data) => {      
      this.datas = data;  
      this.nama_sekolah = data.nama_sekolah;
      this.alamat_sekolah = data.alamat_sekolah;
      this.telp = data.no_telp;
      this.kecamatan = data.kecamatan;
      this.agama = data.agama;
      this.akreditasi = data.akreditasi;
      this.tahun_akreditasi = data.tahun_akreditasi;
      this.nama_kepala_sekolah = this.nama_kepala_sekolah;
      console.log(data);   
    });
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  optionsInternet():void{
    let item = this.internet;
    this.internet = item
    console.log(this.internet);
  }

  optionsAc():void{
    let item = this.ruangAc;
    this.ruangAc = item
    console.log(this.ruangAc);
  }



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

}
