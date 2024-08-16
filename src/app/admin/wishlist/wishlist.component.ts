import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeletePopupComponent } from 'src/app/delete-popup/delete-popup.component';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  constructor(private dialog: MatDialog){}
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

  deletefav(){
    const ref: MatDialogRef<DeletePopupComponent> = this.dialog.open(
      DeletePopupComponent,
      {
        width: '350px',
        height: '150px',
        disableClose: false,
        data: {
          label: "delete",
        }
      }
    );
    ref.afterClosed().subscribe((data: any) => {
      if (data == true) {
        
      }
       
    });
  }


}
