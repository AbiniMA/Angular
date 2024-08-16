import { Component } from '@angular/core';
import { BrowserStorageService } from '../provider/storage.service';

@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.scss']
})
export class PrivacypolicyComponent {
  heading: any;
  constructor(private browserStorageService: BrowserStorageService) { }

  ngOnInit() {
    this.heading = this.browserStorageService.get("privacy");
    console.log(this.heading)
  }

}
