import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import  { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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




const appRoutes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'register_info/:username/:password/:email',component:Registrasi2Component},
  {path:'dashboard',component:DashboardComponent},
  {path:'sekolah-admin',component:SekolahAdminComponent},

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

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
