import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from '../list-product/list-product.component';
import { HomeComponent } from '../../admin/home/home.component';
import { HeaderComponent } from '../../admin/header/header.component';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from '../list-user/list-user.component'; 
import { NewsComponent } from '../../admin/news/news.component';
import { ManagamentProductComponent } from '../managament-product/managament-product.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import {  MessageService } from "primeng/api";
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { AddUserComponent } from '../list-user/add-user/add-user.component';
import { UpdateUserComponent } from '../list-user/update-user/update-user.component';
import {RatingModule} from 'primeng/rating';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    children:[
      {
      path: 'home',
      component: ListUserComponent,
      },
      {
        path: 'listProduct',
        component: ListProductComponent,
      },
      {
        path: 'managementProduct',
        component: ManagamentProductComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
    ]
  },
]

@NgModule({
  declarations: [
    ListProductComponent,
    HomeComponent,
    HeaderComponent,
    ListUserComponent,
    NewsComponent,
    ManagamentProductComponent,
    AddUserComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    PanelMenuModule,
    RouterModule.forChild(routes),
    FormsModule,
    TableModule,
    ButtonModule,
    MessagesModule,
    ConfirmDialogModule,
    DynamicDialogModule,
    DialogModule,
    ToastModule,
    ReactiveFormsModule,
    RatingModule,
    ProgressBarModule,
    InputTextModule
  ],
  providers:[MessageService,  ConfirmationService]
})
export class AdminModule { }
