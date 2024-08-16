import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyordersComponent } from './myorders/myorders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MyaddressComponent } from './myaddress/myaddress.component';
import { DemomaterialModule } from '../demoMeterial/demometerial';
import { VieworderComponent } from './vieworder/vieworder.component';
import { MatStepperModule } from '@angular/material/stepper';
import { AddaddressComponent } from './addaddress/addaddress.component';


@NgModule({
  declarations: [
    MyprofileComponent,
    MyordersComponent,
    WishlistComponent,
    MyaddressComponent,
    VieworderComponent,
    AddaddressComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DemomaterialModule,
    MatStepperModule
  ]
})
export class AdminModule { }
