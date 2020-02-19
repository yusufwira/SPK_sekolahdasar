import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, CanActivate, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
//import { NavController, LoadingController, ToastController } from 'ionic-angular';


@Component({
  selector: 'app-registrasi2',
  templateUrl: './registrasi2.component.html',
  styleUrls: ['./registrasi2.component.scss'],
})
export class Registrasi2Component implements OnInit {
  imageURI:any;
  imageFileName:any;
  constructor( private route: ActivatedRoute, public user:UserService,public alertController: AlertController,private transfer: FileTransfer,private camera: Camera) { }

  parent= false;
  school = false;

  username="";
  password="";
  nama="";
  alamat="";
  kecamatan="";
  notelp="";
  email="";
  public pic:any;
  hak_akses="";
  ngOnInit() {
  	this.username = this.route.snapshot.params['username'];
  	this.password = this.route.snapshot.params['password'];
  	this.email = this.route.snapshot.params['email'];
  	console.log(this.username+" "+this.password+" "+this.email)
  }

  coba(){
    var fileVal=document.getElementById("pic ");
    console.log(fileVal)
  }

  active_parent(){
  	this.parent = true;
  	this.school = false;
  	this.hak_akses = "parent";
  }

  active_school(){
  	this.parent = false;
  	this.school = true;
  	this.hak_akses = "admin_sekolah";
  }

   inputnama(event:any) {    
    this.nama = event.target.value;    
   }

   inputalamat(event:any) {    
    this.alamat = event.target.value;    
   }

   inputnotelp(event:any) {    
    this.notelp = event.target.value;    
   }

   optionsFn():void{

      this.pic = document.getElementById("Id");
      console.log(this.pic);
     
   	  let item = this.kecamatan;
   	  this.kecamatan = item;
   }


   register(){     
   	  this.user.username = this.username;
      this.user.password = this.password;
      this.user.email = this.email;
      this.user.nama = this.nama;
      this.user.alamat = this.alamat;
      this.user.notelp = this.notelp;
      this.user.kecamatan = this.kecamatan;
      this.user.hak = this.hak_akses;

      this.user.Registrasi().subscribe((data) => {      
        console.log(data);
        this.peringatan(data);                
      });
   }


   peringatan(data){
     const alert =  this.alertController.create({
      header: 'Registrasi',
      message: data,
      buttons: ['OK']
    }).then(alert=> alert.present());;
   }

   getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
  
    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
      
    });
  }

  uploadFile() {
    
    const fileTransfer: FileTransferObject = this.transfer.create();
  
    let options: FileUploadOptions = {
      fileKey: 'ionicfile',
      fileName: 'ionicfile',
      chunkedMode: false,
      mimeType: "image/jpeg",
      headers: {}
    }
  
    fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
      .then((data) => {
      console.log(data+" Uploaded Successfully");
      this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
      
      
    }, (err) => {
      console.log(err);
      
    });
  }

  

}
