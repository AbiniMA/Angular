import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  constructor(private router: Router) { }

  ordersuccess() {
    this.router.navigateByUrl('header/ordersuccess');
  }

  checkoutitems: any = [
    { image: 'assets/images/cart-1.png', name: 'Babyhug Bathtub shape dish kitty design la jhddg hhdhhdddddddd', amount: '₹1500.00' },
    { image: 'assets/images/cart-2.png', name: 'Babyhug Bathtub shape dish kitty design la jhddg hhdhhdddddddd', amount: '₹1500.00' },

  ]
}
