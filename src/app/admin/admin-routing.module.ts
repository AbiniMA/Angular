import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyordersComponent } from './myorders/myorders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MyaddressComponent } from './myaddress/myaddress.component';
import { VieworderComponent } from './vieworder/vieworder.component';
import { AddaddressComponent } from './addaddress/addaddress.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'myprofile', },
  {path:'myprofile',component:MyprofileComponent},
  {path:'myorders',component:MyordersComponent},
  {path:'mywishlist',component:WishlistComponent},
  {path:'myaddress',component:MyaddressComponent},
  {path:'myorders/vieworder',component:VieworderComponent},
  {path:'myaddress/addaddress',component:AddaddressComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
