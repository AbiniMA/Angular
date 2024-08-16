import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private refreshNavSource = new Subject<boolean>();
  refreshNav$ = this.refreshNavSource.asObservable();

  refresh() {
    this.refreshNavSource.next(true);
  }
 
}