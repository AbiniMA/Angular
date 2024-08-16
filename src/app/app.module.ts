import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemomaterialModule } from './demoMeterial/demometerial';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderSidebarComponent } from './header-sidebar/header-sidebar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisitShopComponent } from './visit-shop/visit-shop.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from './admin/admin.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { LogoutpopupComponent } from './logoutpopup/logoutpopup.component';
import { FilterPopupComponent } from './filter-popup/filter-popup.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSidebarComponent,
    HomepageComponent,
    LoginComponent,
    VisitShopComponent,
    ProductViewComponent,
    AddtocartComponent,
    CheckoutComponent,
    AdminComponent,
    OrdersuccessComponent,
    DeletePopupComponent,
    LogoutpopupComponent,
    FilterPopupComponent,
    PrivacypolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemomaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [ { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class AppModule { }
