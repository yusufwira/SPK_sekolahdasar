import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import  { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import {  FileUploadOptions } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HeaderColor } from '@ionic-native/header-color/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Registrasi2Component } from './registrasi2/registrasi2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SekolahAdminComponent } from './sekolah-admin/sekolah-admin.component';
import { SekolahViewComponent } from './sekolah-view/sekolah-view.component';
import { SekolahCreateComponent } from './sekolah-create/sekolah-create.component';
import { SekolahCreateAComponent } from './sekolah-create-a/sekolah-create-a.component';
import { SekolahCreateBComponent } from './sekolah-create-b/sekolah-create-b.component';
import { EktrakurikulerAdminComponent } from './ektrakurikuler-admin/ektrakurikuler-admin.component';
import { EkstrakurikulerCreateComponent } from './ekstrakurikuler-create/ekstrakurikuler-create.component';
import { KriteriaAdminComponent } from './kriteria-admin/kriteria-admin.component';
import { KriteriaCreateComponent } from './kriteria-create/kriteria-create.component';





const appRoutes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'register_info/:username/:password/:email',component:Registrasi2Component},
  {path:'dashboard',component:DashboardComponent},
  {path:'sekolah-admin',component:SekolahAdminComponent},
  {path:'sekolah-view/:id',component:SekolahViewComponent},
  {path:'sekolah-create',component:SekolahCreateComponent},
  {path:'sekolah-create-a',component:SekolahCreateAComponent},
  {path:'sekolah-create-b/:id',component:SekolahCreateBComponent},
  {path:'ekstrakurikuler-admin',component:EktrakurikulerAdminComponent},
  {path:'ekstrakurikuler-create',component:EkstrakurikulerCreateComponent},
  {path:'kriteria-admin',component:KriteriaAdminComponent},
  {path:'kriteria-create',component:KriteriaCreateComponent},

  ];


@NgModule({
  declarations: [
  AppComponent,
  DashboardComponent,
  LoginComponent,
  RegisterComponent,
  Registrasi2Component,
  DashboardComponent,
  SekolahAdminComponent,
  SekolahViewComponent,
  SekolahCreateComponent,
  SekolahCreateAComponent,
  SekolahCreateBComponent,
  EktrakurikulerAdminComponent,
  EkstrakurikulerCreateComponent,
  KriteriaAdminComponent,
  KriteriaCreateComponent,
  
  

  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HeaderColor,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FileTransfer,
    //FileUploadOptions,
    //FileTransferObject,
    File,
    Camera
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
