import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KriteriaService {

  constructor(private http: HttpClient) { }

  nama="";
  inputKriteria(){
    return this.http.get("http://localhost/ta_backend/kriteria/insert.php?nama="+this.nama);
  }

  dataKriteria(){
    return this.http.get("http://localhost/ta_backend/kriteria/tampil.php");
  }

  deleteKriteria(id){
    return this.http.get("http://localhost/ta_backend/kriteria/delete.php?id="+id);
  }

  jumlahKriteria(){
    return this.http.get("http://localhost/ta_backend/kriteria/jumlah.php?");
  }
}
