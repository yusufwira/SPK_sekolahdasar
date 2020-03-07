import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router,ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { SekolahService } from '../sekolah.service';

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
  ngOnInit() {    
    this.sekolah.id = this.route.snapshot.params['id'];
    this.sekolah.DetailSekolah().subscribe((data) => {    
      console.log(data);
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
      //console.log(this.arr_foto);            
    });

    this.sekolah.DetailEkstra().subscribe((data) => {    
      console.log(data);
      this.arr_eks = data;      
      //console.log(this.arr_foto);            
    });
  }

}
