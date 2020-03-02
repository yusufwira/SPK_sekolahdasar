import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {of} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SekolahService {

  constructor(private http: HttpClient) { }

  username="";
  file:any;
  img:any;
  photo="";

  upload():Observable<any>{
    let body = new HttpParams();
    let Data:FormData = new FormData();
    Data.append('file_upload', this.file, this.file.name); 
    Data.append('username', this.username); 
    return this.http.post<any>
    ("http://localhost/ta_backend/sekolah/upload.php", Data);
  }

  data1:any;
  data2:any;
  datafoto:any;
  userid = "";
  Create():Observable<any>{   
    let body = new HttpParams();
    let data:FormData = new FormData();

    // detail sekolah
    data.append('nama', this.data1['nama']); 
    data.append('alamat', this.data1['alamat']); 
    data.append('telp', this.data1['telp']); 
    data.append('kecamatan', this.data1['kecamatan']); 
    data.append('agama', this.data1['agama']); 
    data.append('akreditasi', this.data1['akreditasi']); 
    data.append('tahunAkre', this.data1['tahunAkre']); 
    data.append('kepalaSekolah', this.data1['kepalaSekolah']);
    data.append('guru', this.data1['guru']);
    data.append('laki', this.data1['laki']);
    data.append('perempuan', this.data1['perempuan']);
    data.append('kurikulum', this.data1['kurikulum']);
    data.append('jam', this.data1['jam']);
     
    // fasilitas
    data.append('internet', this.data2['internet']);
    data.append('listrik', this.data2['listrik']);
    data.append('ruangAc', this.data2['ruangAc']);
    data.append('dayalistrik', this.data2['dayaListrik']);
    data.append('luastanah', this.data2['luasTanah']);
    data.append('jumlahkelas', this.data2['jumlahKelas']);
    data.append('jumlahlab', this.data2['jumlahLab']);
    data.append('jumlahperpus', this.data2['jumlahPerpus']);
    data.append('koorX', this.data2['X']);
    data.append('koorY', this.data2['Y']);
    data.append('ket', this.data2['ket']);    
    data.append('iduser', this.userid);
    var lastid = this.http.post<any>
    ("http://localhost/ta_backend/sekolah/create.php", data);

    //console.log(this.datafoto[0].nama);
    return lastid;
  }

  idSekolah= "";
  arrayfoto=[];
  uploudFoto():Observable<any>{   
    let body = new HttpParams();
    let data:FormData = new FormData();
    console.log(this.datafoto.length);
    for (let index = 0; index < this.datafoto.length; index++) {
      data.append("nama["+index+"]", this.datafoto[index].nama);
      data.append("ext["+index+"]", this.datafoto[index].ext);       
    }
    data.append("idSekolah",this.idSekolah);
    var hasil = this.http.post<any>
    ("http://localhost/ta_backend/sekolah/foto.php", data);
    this.arrayfoto.push(hasil);
    
    return hasil;
  }
}
