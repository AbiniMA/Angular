import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.scss']
})
export class AddtocartComponent {
  constructor(private router: Router){}
  cartitems:any=[
    {image:'assets/images/cart-1.png',name:'Babyhug Bathtub Shape Soap Dish Kitty Design',description:'Lorem ipsum dolor sit amet consectetur. Id in elit augue',amount:'₹1500.00'},
    // {image:'assets/images/cart-2.png',name:'Babyhug Bathtub Shape Soap Dish Kitty Design',description:'Lorem ipsum dolor sit amet consectetur. Id in elit augue',amount:'₹1400.00'},
    {image:'assets/images/cart-3.png',name:'Babyhug Bathtub Shape Soap Dish Kitty Design',description:'Lorem ipsum dolor sit amet consectetur. Id in elit augue',amount:'₹1300.00'},
    
  ];

  checkout(){
    this.router.navigateByUrl('header/checkout');
  }

  backtoshop(){
    this.router.navigateByUrl('header/home');
  }
}
