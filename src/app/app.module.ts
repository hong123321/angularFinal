import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './layout/login/login.component';
import { RegisterComponent } from './layout/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  MessageService } from "primeng/api";
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { SnowModule } from 'snow';
import {InputTextModule} from 'primeng/inputtext';
const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('./layout/user/module/user.module').then(m=>m.UserModule)
  },
  {
    path: 'user',
    loadChildren:() => import('./layout/user/module/user.module').then(m=>m.UserModule)
  },

  {
    path: 'admin',
    loadChildren: ()=> import('./layout/admin/module/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    MessagesModule,
    SnowModule,
    InputTextModule
   
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
