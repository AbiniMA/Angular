import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderSidebarComponent } from './header-sidebar/header-sidebar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { VisitShopComponent } from './visit-shop/visit-shop.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from './admin/admin.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'header' },
  {
    path: 'header', component: HeaderSidebarComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomepageComponent },
      {path:'visit-shop',component:VisitShopComponent},
      {path:'product-view',component:ProductViewComponent},
      {path:'addtocart',component:AddtocartComponent},
      {path:'checkout',component:CheckoutComponent},
      {path:'ordersuccess',component:OrdersuccessComponent},
      {path:'privacy',component:PrivacypolicyComponent},
      {path:'admin',component:AdminComponent,  
      children:[{
        path:'',loadChildren:()=>import(`../app/admin/admin.module`).then(m=>m.AdminModule )
      }
      ]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
