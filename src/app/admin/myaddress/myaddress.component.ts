import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeletePopupComponent } from 'src/app/delete-popup/delete-popup.component';

@Component({
  selector: 'app-myaddress',
  templateUrl: './myaddress.component.html',
  styleUrls: ['./myaddress.component.scss']
})
export class MyaddressComponent {
  constructor(private router: Router,private dialog: MatDialog){}
  addresslist:any = [
    {name:'Lorem ipsum',number:'+91 98765 43210',address:'12/b Chettikulam Junction, Hindu College Rd, Chetti Kulam,Nagercoil, '},
    {name:'Lorem ipsum',number:'+91 98765 43210',address:'12/b Chettikulam Junction, Hindu College Rd, Chetti Kulam,Nagercoil, '},
    {name:'Lorem ipsum',number:'+91 98765 43210',address:'12/b Chettikulam Junction, Hindu College Rd, Chetti Kulam,Nagercoil, '},
    {name:'Lorem ipsum',number:'+91 98765 43210',address:'12/b Chettikulam Junction, Hindu College Rd, Chetti Kulam,Nagercoil, '},
    {name:'Lorem ipsum',number:'+91 98765 43210',address:'12/b Chettikulam Junction, Hindu College Rd, Chetti Kulam,Nagercoil, '},
  ];
  addaddress(){
    this.router.navigateByUrl('header/admin/myaddress/addaddress');
  }
  
  deletepopup(){
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

