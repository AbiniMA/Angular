import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {
  constructor(private router: Router){}
  images: any[] = [
    { image: 'assets/images/carousel-1.png' },
    { image: 'assets/images/carousel-2.png' },
    { image: 'assets/images/carousel-3.png' },
    { image: 'assets/images/carousel-4.png' },
    { image: 'assets/images/carousel-5.png' },
  ];
  activeImageIndex: number = 0;
  addtocart(){
    this.router.navigateByUrl('header/addtocart');
  }
  setActiveImage(index: number) {
    this.activeImageIndex = index;
  }

  nextImage() {
    this.activeImageIndex = (this.activeImageIndex + 1) % this.images.length;
  }

  prevImage() {
    this.activeImageIndex = (this.activeImageIndex - 1 + this.images.length) % this.images.length;
  }

  
  activeproducts:any=[
    {image: 'assets/images/carousel-1.png',amount:'₹1450.00',title:'Super Premium Magic Car - Pink' },
    {image: 'assets/images/carousel-2.png',amount:'₹1450.00',title:'Super Premium Magic Car - Pink' },
    {image: 'assets/images/carousel-3.png',amount:'₹1450.00',title:'Super Premium Magic Car - Pink' },
    {image: 'assets/images/carousel-4.png',amount:'₹1450.00',title:'Super Premium Magic Car - Pink' },
    {image: 'assets/images/carousel-5.png',amount:'₹1450.00',title:'Super Premium Magic Car - Pink' },
    {image: 'assets/images/carousel-6.png',amount:'₹1450.00',title:'Super Premium Magic Car - Pink' },
  ]
}
