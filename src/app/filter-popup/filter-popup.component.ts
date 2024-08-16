import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-popup',
  templateUrl: './filter-popup.component.html',
  styleUrls: ['./filter-popup.component.scss']
})
export class FilterPopupComponent {
  constructor(private dialog: MatDialog) {

  }
  dialogClose() {
    this.dialog.closeAll();

  }
  subCategory: any = [{
    catname: "Doll houses"
  },
  {
    catname: "Toys"
  },
  {
    catname: "Education"
  },
  {
    catname: "Cosmetics"
  },
  {
    catname: "Accessories"
  },

  ]
  catlistrow: any = [{
    catname: "Sub Category"
  },
  {
    catname: "Brands"

  },
  {
    catname: "price range"

  },
  {
    catname: "Ratings"

  },
  {
    catname: "Discount"

  },

  ]
  brands: any = [{
    brandname: "Lorem ipsum"
  },
  {
    brandname: "Lorem ipsum"

  },
  {
    brandname: "Lorem ipsum"

  },
  {
    brandname: "Lorem ipsum"

  },
  {
    brandname: "Lorem ipsum"

  },

  ]


  selectedCategoryIndex: number = 0;
  changeDesign(i: any) {
    this.selectedCategoryIndex = i;
  }
}
