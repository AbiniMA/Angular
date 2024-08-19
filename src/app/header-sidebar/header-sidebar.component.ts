import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BrowserStorageService } from '../provider/storage.service';

@Component({
  selector: 'app-header-sidebar',
  templateUrl: './header-sidebar.component.html',
  styleUrls: ['./header-sidebar.component.scss']
})
export class HeaderSidebarComponent {

  showMegaMenu: boolean;
  constructor(private dialog: MatDialog, private router: Router,    private browserStorageService: BrowserStorageService,) {
    this.showMegaMenu = false;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showMegaMenu = false;
      }
      if (event instanceof NavigationEnd) {
        this.showMegaMenu = this.shouldShowMegaMenu(event.urlAfterRedirects);
      }
    });
    if (this.router.url) {
      this.showMegaMenu = this.shouldShowMegaMenu(this.router.url);
    }
  }

  loginUser() {
    const ref: MatDialogRef<LoginComponent> = this.dialog.open(
      LoginComponent,
      {
        width: '350px',
        height: 'fit-content',
        disableClose: true,
      }
    );
    ref.afterClosed().subscribe((data: any) => {

    })
  }
  items: { category: string, subItems: string[] }[] = [
    { category: 'SHOP BY Trends', subItems: ['Bestsellers', 'Baby Essentials', 'Nightwear', 'Lounge & Trackpants', ' Diaper & Bootie Leggings', '  Onesies & Rompers', '  Party Wear', '  Athleisure & Sportswear', '  Ethnic Wear'] },
    {
      category: 'HOME PLAY ACTIVITIES', subItems: ['Acc  Play Dough, Sand & Moulds ', 'Activity Kit ', 'Sunglasses', 'Hair Bands', 'Hair Clips & Rubber Bands', 'Summer Caps'
        , 'Jewellery', 'Bags', 'Belts', 'Smart Watches', 'Kids Umbrellas', 'Woolen Caps & Ear Muffs',]
    },
    { category: 'SHOP BY BRAND', subItems: ['Accessory 1', 'Accessory 2', 'T-shirts', ' Shorts', 'Jeans & Trousers', 'Nightwear', 'Lounge & Trackpants', ' Diaper & Bootie Leggings'] },
    {
      category: 'SHOP BY Name', subItems: ['Accessory 1', 'Accessory 2', 'Cutewalk',
        'Pinekids', 'Babyoye', 'Puma', ' ADIDAS KIDS', 'Skechers', 'Campus', 'Kazarmax', 'Asics Kids']
    },
    { category: 'SHOP BY CATEGORY', subItems: [' Sets & Suits', 'T-shirts', ' Shorts', 'Jeans & Trousers', 'Nightwear', 'Lounge & Trackpants', ' Diaper & Bootie Leggings', '  Onesies & Rompers', '  Party Wear', '  Athleisure & Sportswear', '  Ethnic Wear'] },
    { category: ' SHOP BY AGE', subItems: ['Preemie/Tine Preemie', 'New Born (0-3 M)', '3-6 Months', '6-9 Months', '9-12 Months', '12-18 Months', '18-24 Months', '2 to 4 Years', '4 to 6 Years', '6 to 8 Years'] },
    { category: '  RIDE-ONS & SCOOTERS', subItems: [' Battery Operated Ride-Ons ', '  Manual Push Ride-Ons ', 'Twister/Swing Cars', ' Kids Scooters', '  Rocking Ride-ons', '  Protective Gear', '  Skates & Skateboards'] },
    { category: 'FASHION ACCESSORIES', subItems: ['Accessory 1', 'Accessory 2',] },
  ];

  columns: { category: string, subItems: string[] }[][] = [];
  ngOnInit(): void {
    const maxItemsPerColumn = 10;
    let currentColumn: { category: string, subItems: string[] }[] = [];
    let currentItemCount = 0;
    this.items.forEach(item => {
      const itemCount = item.subItems.length + 1;
      if (currentItemCount + itemCount <= maxItemsPerColumn) {
        currentColumn.push(item);
        currentItemCount += itemCount;
      } else {
        this.columns.push(currentColumn);
        currentColumn = [item];
        currentItemCount = itemCount;
      }
    });
    if (currentColumn.length > 0) {
      this.columns.push(currentColumn);
    }
  }

  shouldShowMegaMenu(url: string): boolean {
    const shouldShow = url.includes('home') || url.includes('visit-shop') || url.includes('product-view');
    return shouldShow;
  }


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

  routehome() {
    this.router.navigateByUrl('header/home');
  }
  wishlist() {
    this.router.navigateByUrl('header/admin/mywishlist');
  }
  profile() {
    this.router.navigateByUrl('header/admin/myprofile');
  }
  addcart() {
    this.router.navigateByUrl('header/addtocart');
  }
  // test(){
  //   this.router.navigateByUrl('header/test')
  // }
  trend(){
    this.router.navigateByUrl('header/test')
  }

  mobilenavlist: any[] = [
    {
      category: 'Toys',
      subCategory: [
        {
          name: 'Bestsellers',
          subItems: ['Item 1', 'Item 2', 'Item 3']
        },
        {
          name: 'New Arrivals',
          subItems: ['New Item 1', 'New Item 2', 'New Item 3']
        }
      ]
    },
    {
      category: 'Electronics',
      subCategory: [
        {
          name: 'Gadgets',
          subItems: ['Gadget 1', 'Gadget 2', 'Gadget 3']
        },
        {
          name: 'Accessories',
          subItems: ['Accessory 1', 'Accessory 2', 'Accessory 3']
        }
      ]
    },
  ];


  // toggleDropdown(event: any) {
  //   event.currentTarget.nextElementSibling.classList.toggle('show');
  // }
  // toggleSubDropdown(event: any) {
  //   event.currentTarget.nextElementSibling.classList.toggle('sub-show');
  // }

  toggleDropdown(event: any) {
    const submenu = event.currentTarget.nextElementSibling;
    const isSubmenuOpen = submenu.classList.contains('show');  
    submenu.classList.toggle('show', !isSubmenuOpen);
    const arrowIcon = event.currentTarget.querySelector('i');
    if (arrowIcon) {
      arrowIcon.classList.toggle('fa-caret-up', !isSubmenuOpen);
      arrowIcon.classList.toggle('fa-caret-down', isSubmenuOpen);
    }
  }
  
  toggleSubDropdown(event: any) {
    const submenu = event.currentTarget.nextElementSibling;
    const isSubmenuOpen = submenu.classList.contains('sub-show');
    const allSubmenus = document.querySelectorAll('.sub-cat-show');
    allSubmenus.forEach((item) => {
      if (item !== submenu && item.classList.contains('sub-show')) {
        item.classList.remove('sub-show');
        const arrowIcon = item.previousElementSibling?.querySelector('i');
        if (arrowIcon) {
          arrowIcon.classList.remove('fa-caret-up');
          arrowIcon.classList.add('fa-caret-down');
        }
      }
    });
    submenu.classList.toggle('sub-show', !isSubmenuOpen);
    const arrowIcon = event.currentTarget.querySelector('i');
    if (arrowIcon) {
      arrowIcon.classList.toggle('fa-caret-up', !isSubmenuOpen);
      arrowIcon.classList.toggle('fa-caret-down', isSubmenuOpen);
    }
  }
  
  policy:any;
  privacy(){
    this.policy="Privacy Policy"
    this.browserStorageService.set("privacy",this.policy);
    this.router.navigateByUrl('header/privacy');
  }

  terms(){
    this.policy="Terms and Conditions"
    this.browserStorageService.set("privacy",this.policy);
    this.router.navigateByUrl('header/privacy');
  }
}
