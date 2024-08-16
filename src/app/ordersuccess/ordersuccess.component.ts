import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordersuccess',
  templateUrl: './ordersuccess.component.html',
  styleUrls: ['./ordersuccess.component.scss']
})
export class OrdersuccessComponent {
  constructor(private router: Router){}
  home(){
    this.router.navigateByUrl('header/home');
  }
  order(){
    this.router.navigateByUrl('header/admin/myorders');
  }
}
