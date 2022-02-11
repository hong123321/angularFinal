import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HomeComponent} from '../home/home.component'
import { HeaderComponent } from '../header/header.component';
import { ProductComponent } from '../product/product.component';
import { NewsComponent } from '../news/news.component';
import { RouterModule, Routes } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import {DataViewModule} from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table'; 
import { CartComponent } from '../product/cart/cart.component';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import {  MessageService } from "primeng/api";
import { OderComponent } from '../oder/oder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtService } from 'src/app/shared/service/jwt.service';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';
import { StepsModule } from 'primeng/steps';
import {CarouselModule} from 'primeng/carousel';
const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    children:[
      {
      path: 'home',
      component: ProductComponent,
     
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path:'order',
        canActivate:[AuthGuard],
        component:OderComponent,
        
      }
    ]
  },

    
      
]
@NgModule({
  declarations: [
    CartComponent,
    HomeComponent,
    HeaderComponent,
    NewsComponent,
    ProductComponent,
    OderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MenubarModule,
    DataViewModule,
    DropdownModule,
    InputTextModule,
    RatingModule,
    FormsModule,
    ButtonModule,
    DynamicDialogModule,
    DialogModule,
    ToastModule,
    TableModule,
    MessagesModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    StepsModule,
    CarouselModule
  ],
  providers:[ConfirmationService,MessageService,JwtService,AuthGuard]
})
export class UserModule { }
