import { Component, OnInit } from '@angular/core';
import { EkstrakurikulerService } from '../ekstrakurikuler.service';
import { UserService } from '../user.service';
import { KriteriaService } from '../kriteria.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(public eks:EkstrakurikulerService,public user:UserService, public kr:KriteriaService) { }

  jumlahEks="";
  jumlahUser="";
  jumlahKriteria=""
  ngOnInit() {

    this.eks.jumlahEks().subscribe((data) => {                  
      this.jumlahEks = data[0].jumlah;     
    });

    this.user.jumlahUsers().subscribe((data) => {                  
      this.jumlahUser = data[0].jumlah; 
      console.log(this.jumlahUser)    
    });

    this.kr.jumlahKriteria().subscribe((data) => {                  
      this.jumlahKriteria = data[0].jumlah; 
      console.log(this.jumlahUser)    
    });
    
  }

}
