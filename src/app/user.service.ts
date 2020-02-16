import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  username="";
  password="";
  email="";
  nama="";
  alamat ="";
  kecamatan = "";
  notelp="";
  hak="";


  Registrasi():Observable<any>{
  	return this.http.get("http://localhost/ta_backend/Auth/Register.php?username="+this.username+"&password="+this.password+"&email="+this.email+"&nama="+this.nama+"&alamat="+this.alamat+"&kecamatan="+this.kecamatan+"&notelp="+this.notelp+"&hak="+this.hak+"");
  }

  Login():Observable<any>{
    return this.http.get("http://localhost/ta_backend/Auth/Login.php?username="+this.username+"&password="+this.password);
  }



}
