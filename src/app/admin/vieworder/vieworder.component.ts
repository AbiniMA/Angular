import { Component } from '@angular/core';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.scss']
})
export class VieworderComponent {
  status: string = 'Processing';
  data: any;
  ngOnInit() {
    this.data = [
      {
        status: 'Order Placed',
        image: 'fa fa-shopping-bag steppericon',
        head:'Order Placed',
        currentStatus: false,
        previousStatus: false
      },
      {
        status: 'Processing',
        image: 'fa fa-refresh steppericon',
        head:'Processing',
        currentStatus: false,
        previousStatus: false
      },
      {
        status: 'On the way',
        image: 'fa fa-truck fa-flip-horizontal steppericon',
        head:'On the way',
        currentStatus: false,
        previousStatus: false
      },
      {
        status: 'Delivered',
        image: 'fa fa-check-circle steppericon',
        head:'Delivered',
        currentStatus: false,
        previousStatus: false
      }
    ]
    for (const [index, value] of this.data.entries()) {
      if (value.status === this.status) {
        value.currentStatus = true;
        value.previousStatus = false
        for (let i = 0; i < index; i++) {
          this.data[i].previousStatus = true;
          this.data[i].currentStatus = false;
        }

        for (let i = index + 1; i < this.data.length; i++) {
          this.data[i].previousStatus = false;
          this.data[i].currentStatus = false;
        }
      }
    }
  }

  checkoutitems: any = [
    { image: 'assets/images/cart-1.png', name: 'Babyhug Bathtub shape dish kitty design la jhddg hhdhhdddddddd', amount: '₹1500.00' },
    { image: 'assets/images/cart-2.png', name: 'Babyhug Bathtub shape dish kitty design la jhddg hhdhhdddddddd', amount: '₹1500.00' },
  ];

}

