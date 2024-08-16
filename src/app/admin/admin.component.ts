import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';
import { LogoutpopupComponent } from '../logoutpopup/logoutpopup.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(private router: Router,private dialog: MatDialog){}
  label = "Personal Information";
   
  profile() {
    this.label = "Personal Information";
  }
  order() {
    this.label = "My Orders";
  }
  wishlist(){
    this.label = "My Wishlist";
  }
  address(){
    this.label = "My Address";
  }
  logout(){
    
    const ref: MatDialogRef<LogoutpopupComponent> = this.dialog.open(
      LogoutpopupComponent,
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
