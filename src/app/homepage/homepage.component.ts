import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {
  constructor(private router: Router, private el: ElementRef) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    $(this.el.nativeElement).find('.bannercarousel').owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      responsive: {
        0: {
          items: 1,
          center: true,
          stagePadding:30,
          animateOut: false,
          animateIn: 'fadeIn',
          margin:0,
        },
        768: {
          items: 1
        },
        992: {
          items: 1
        }
      }
    });

    $(this.el.nativeElement).find('.productcarouse').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: [
        "<i class='fa fa-arrow-left'></i>",
        "<i class='fa fa-arrow-right'></i>"
      ],
      autoplay:true,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 4,
          center:true,
        },
        600: {
          items: 5
        },
        1000: {
          items: 6
        }
      }
    })
  }

  click(){
 
  }

  buyerbannerlist: any = [
    { img: 'assets/images/bannerv2.png' },
    { img: 'assets/images/admin-banner.png' },
    { img: 'assets/images/mobilebanner-2.jpg' },

  ];
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


  productcarousel:any=[
    {url: 'assets/images/carousel-1.png',title:'Ride on' },
    {url: 'assets/images/carousel-2.png',title:'Doll house' },
    {url: 'assets/images/carousel-3.png',title:'Guns'  },
    {url: 'assets/images/carousel-4.png',title:'Tricycle'  },
    {url: 'assets/images/carousel-5.png',title:'Ride on'  },
    {url: 'assets/images/carousel-6.png',title:'Ride on'  },
    {url: 'assets/images/carousel-7.png',title:'Ride on'  },
    {url: 'assets/images/carousel-8.png',title:'Ride on'  },
    {url: 'assets/images/carousel-9.png',title:'Ride on'  },
    {url: 'assets/images/carousel-10.png',title:'Ride on'  },
    {url: 'assets/images/carousel-11.png',title:'Ride on'  },
    {url: 'assets/images/carousel-12.png',title:'Ride on'  },
  ];


  activeproducts:any=[
    {image: 'assets/images/carousel-1.png',amount:'₹1450.00',title:'Super Premium Magic Car - Pink' },
    {image: 'assets/images/carousel-2.png',amount:'₹1450.00',title:'Super Premium Magic Car - Pink' },
    {image: 'assets/images/carousel-3.png',amount:'₹1450.00',title:'Super Premium Magic Car - Pink' },
    {image: 'assets/images/carousel-4.png',amount:'₹1450.00',title:'Super Premium Magic Car - Pink' },
    {image: 'assets/images/carousel-5.png',amount:'₹1450.00',title:'Super Premium Magic Car - Pink' },
    {image: 'assets/images/carousel-6.png',amount:'₹1450.00',title:'Super Premium Magic Car - Pink' },
    {image: 'assets/images/carousel-7.png',amount:'₹1450.00',title:'Super Premium Magic Car - Pink' },
    {image: 'assets/images/carousel-8.png',amount:'₹1450.00',title:'Super Premium Magic Car - Pink' },
  ]

  activities:any=[
    {name:'All Product'},
    {name:'Doll Houses'},
    {name:'Education'},
    {name:'Toys & Cars'},
    {name:'Teddys'},
  ];

  activename:any;
  activateItem(i:any,item:any){
    this.activename=item?.name;
  }
  isClicked = false;

  toggleHeart() {
    this.isClicked = true; // Set to true when clicked
    setTimeout(() => {
      this.isClicked = false; // Reset after 3 seconds
    }, 3000);
  }

  viewProduct(){
    this.router.navigateByUrl('header/visit-shop');
  }

}



