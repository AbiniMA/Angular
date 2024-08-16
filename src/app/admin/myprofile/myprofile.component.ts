import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent {
  constructor(private router: Router) { }
  editShow: boolean = true;
  editClick() {
    this.editShow = false;
  }
  backtoedit() {
    this.editShow = true;
  }

  order() {
    this.router.navigateByUrl('header/admin/myorders');
  }

  wishlist(){
    this.router.navigateByUrl('header/admin/mywishlist');
  }

  address(){
    this.router.navigateByUrl('header/admin/myaddress');
  }
}
