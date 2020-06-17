import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SekolahService } from '../sekolah.service';

@Component({
  selector: 'app-daftarsekolah',
  templateUrl: './daftarsekolah.component.html',
  styleUrls: ['./daftarsekolah.component.scss'],
})
export class DaftarsekolahComponent implements OnInit {

  constructor(public alertController: AlertController, public sekolah:SekolahService) { }

  public datas:any;
  ngOnInit() {
    this.sekolah.ListSekolah().subscribe((data) => {    
      this.datas = data;   
      console.log(data);
     });
     
  }

}
