import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {of} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpkService {

  constructor(private http: HttpClient) { }
  arr_kriteria:any;
  arr_sekolah:any;
  proses_ahp():Observable<any>{
    let body = new HttpParams();
    let testData:FormData = new FormData();
    testData.append('nama',this.arr_kriteria); 
    testData.append('sekolah', this.arr_sekolah); 
    return this.http.post<any>
    ("http://localhost/spk_backend/proses_hasil.php", testData);
  }
}
