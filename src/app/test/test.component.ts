import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  product=[
   {name:'Babyhug Bathtub Shape Soap Dish Kitty Design',price:120},
   {name:'Babyhug Bathtub Shape Soap Dish Kitty Design',price:120},
   {name:'Babyhug Bathtub Shape Soap Dish Kitty Design',price:120},
   {name:'Babyhug Bathtub Shape Soap Dish Kitty Design',price:120},
   ];

   isValid=true;

   carousal=[
    {image:'assets/images/carousel-1.png',title:'Jeep'},
    {image:'assets/images/carousel-2.png ',title:'House'},
    {image:'assets/images/carousel-3.png',title:'Gun'},
    {image:'assets/images/carousel-4.png',title:'Bicycle'},
    {image:'assets/images/carousel-5.png',title:'Truck'},
   ]
}



