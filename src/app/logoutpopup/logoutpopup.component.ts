import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoutpopup',
  templateUrl: './logoutpopup.component.html',
  styleUrls: ['./logoutpopup.component.scss']
})
export class LogoutpopupComponent {
  constructor(public _dialogRef: MatDialogRef<LogoutpopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private router: Router) { }
  closePopup() {
    localStorage.clear();
    sessionStorage.clear();
    this._dialogRef.close(true);
    this.router.navigateByUrl('header/home');
   }
 
}
