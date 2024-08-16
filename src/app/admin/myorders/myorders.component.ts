import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.scss']
})
export class MyordersComponent {
  constructor(private router: Router){}
  length:any=0;
  vieworder(){
    this.router.navigateByUrl('header/admin/myorders/vieworder');
  }
}
