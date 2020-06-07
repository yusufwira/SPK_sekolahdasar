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

  public datas:any
  ngOnInit() {
    this.sekolah.id =this.route.snapshot.params['id'];
    this.sekolah.DetailSekolah().subscribe((data) => {      
      this.datas = data;   
      //console.log(data);   
 });;
  }

}
