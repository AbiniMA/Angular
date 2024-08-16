import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BrowserStorageService } from '../provider/storage.service';
import { Router } from '@angular/router';
import { FilterPopupComponent } from '../filter-popup/filter-popup.component';

@Component({
  selector: 'app-visit-shop',
  templateUrl: './visit-shop.component.html',
  styleUrls: ['./visit-shop.component.scss']
})
export class VisitShopComponent {
  constructor(private router:Router,private dialog: MatDialog){

  }
  panelOpenState: boolean[] = [true, true, true];

  chipsbtn: any = [{
    name: "Lorem ipsum"
  },
  {
    name: "Lorem ipsum"
  }, 
  {
    name: "Lorem ipsum"
  }, 
  ]

  brands: any = [{
    brandname: "Doll Houses"
  },
  {
    brandname: "Toys"
  },
  {
    brandname: "Education"
  },

  {
    brandname: "Teddy"
  },
  {
    brandname: "See all"
  },
  ]

  catbrands: any = [{
    brandname: "lorem ipsum"
  },
  {
    brandname: "Grooming Products"
  },
  {
    brandname: "Hair Oils’s"
  },
  {
    brandname: "lorem ipsum"
  },
  {
    brandname: "Hair lorem ipsum"
  },
  {
    brandname: "Hair Oils’s"
  },
  
  ]

  premiumprouducts:any=[
    {
      name:"Babyhug Bathtub Shape Soap Dish Kitty Design" ,offer:"30%",amount:"₹120",strike:"₹160",image:"assets/images/pngwing (1).png"
    },
    {
      name:"Babyhug Bathtub Shape Soap Dish Kitty Design" ,offer:"30%",amount:"₹120",strike:"₹160",image:"assets/images/pngwing 2.png"
    },
    {
      name:"Babyhug Bathtub Shape Soap Dish Kitty Design" ,offer:"30%",amount:"₹120",strike:"₹160",image:"assets/images/pngwing 3.png"
    },
    {
      name:"Babyhug Bathtub Shape Soap Dish Kitty Design" ,offer:"30%",amount:"₹120",strike:"₹160",image:"assets/images/pngwing 4.png"
    },
    {
      name:"Babyhug Bathtub Shape Soap Dish Kitty Design" ,offer:"30%",amount:"₹120",strike:"₹160",image:"assets/images/pngwing 5.png"
    },
    {
      name:"Babyhug Bathtub Shape Soap Dish Kitty Design" ,offer:"30%",amount:"₹120",strike:"₹160",image:"assets/images/pngwing 6.png"
    },
    {
      name:"Babyhug Bathtub Shape Soap Dish Kitty Design" ,offer:"30%",amount:"₹120",strike:"₹160",image:"assets/images/pngwing 7.png"
    },
    {
      name:"Babyhug Bathtub Shape Soap Dish Kitty Design" ,offer:"30%",amount:"₹120",strike:"₹160",image:"assets/images/pngwing.png"
    },
    
  ];

  menulist: any = [
    { menu: 'Electronics' },
    { menu: 'Beauty Products' },
    { menu: 'Men’s Grooming' },
    { menu: 'Women’s Grooming' },
    { menu: 'Toys' },
    { menu: 'Books & Notes' },
    { menu: 'Home Decors' },
    { menu: 'Others' },

  ];
  redirectProductView(){
    this.router.navigateByUrl('header/product-view');
  }
  filterpopupOpen() {
    const ref: MatDialogRef<FilterPopupComponent> = this.dialog.open(
      FilterPopupComponent,
      {
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
        data: {
        },
        disableClose: false,
      }
    );
  }
}
