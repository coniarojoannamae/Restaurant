import { Component } from '@angular/core';
import {RestaurantModel} from '../restaurant/restaurant.model';
//import { RestaurantModel} from './restaurant.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {

  public restaurants: RestaurantModel[] = [
    {
      id: 1,
      name: "Mang Inasal",
      status: "Open",
      description: "Famous for its grilled chicken and unlimited rice offerings.",
      imageUrl: "mang-inasal.jpg"
    },
    {
      id: 2,
      name: "Jollibee",
      status: "Open",
      description: "The most beloved fast-food chain in the Philippines known for its Chickenjoy and Jolly Spaghetti.",
      imageUrl: "jollibee.jpg"
    },
    {
      id: 3,
      name: "Max's Restaurant",
      status: "Closed",
      description: "Home of the famous fried chicken, serving classic Filipino dishes since 1945.",
      imageUrl: "maxs-restaurant.jpg"
    },
    {
      id: 4,
      name: "Andok's",
      status: "Open",
      description: "Popular for its roasted chicken and affordable meals.",
      imageUrl: "andoks.jpg"
    }
  ];

}
