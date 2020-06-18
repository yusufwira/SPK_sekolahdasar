import { Component, OnInit } from '@angular/core';
import { KriteriaService } from '../kriteria.service';
import { SekolahService } from '../sekolah.service';

@Component({
  selector: 'app-spk',
  templateUrl: './spk.component.html',
  styleUrls: ['./spk.component.scss'],
})
export class SpkComponent implements OnInit {

  constructor(public kriteria:KriteriaService, public sekolah:SekolahService) { }
  
  prog_bar:String="0.2";
  public datas_kriteria:Object;
  public datas_sekolah:Object;
  pilih="";
  arr_kriteria=[];
  arr_sekolah=[];

  ngOnInit() {
    this.kriteria.dataKriteria().subscribe((data) => {      
      this.datas_kriteria = data;    
      console.log(this.datas_kriteria);  
    });

    this.sekolah.ListSekolah().subscribe((data) => {    
      this.datas_sekolah = data;   
      console.log(data);
     });
   
  }

  progres(bar:String){
    this.prog_bar = bar;
  }
  
  
  getValue_kriteria(value){
    this.pilih = value;
    var sama = false;
    for (let index = 0; index < this.arr_kriteria.length; index++) {
      if(this.arr_kriteria[index] == this.pilih){
        sama = true;
      }
    }
    if(sama == true){
      this.arr_kriteria=this.arr_kriteria.filter(item => item !== this.pilih)
    }
    else{
      this.arr_kriteria.push(this.pilih);
    }
    console.log(this.arr_kriteria);
  }


  getValue_sekolah(value){
    this.pilih = value;
    var sama = false;
    for (let index = 0; index < this.arr_sekolah.length; index++) {
      if(this.arr_sekolah[index] == this.pilih){
        sama = true;
      }
    }
    if(sama == true){
      this.arr_sekolah=this.arr_sekolah.filter(item => item !== this.pilih)
    }
    else{
      this.arr_sekolah.push(this.pilih);
    }
    console.log(this.arr_sekolah);
  }
}
