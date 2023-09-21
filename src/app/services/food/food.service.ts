import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  

  getAllFoodByTag(tag: string): Foods[] {
    if (tag == 'all') return this.getAll();
    else return this.getAll().filter((food) => food.tags?.includes(tag));
  }
  //get food by id
  getFoodById(foodId:string){
    return this.getAll().filter(food=>food.id)?? new Foods();
  }
  getAllTag(): Tag[] {
    return [
      { name: 'all', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Pizaa Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorotie: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/image/food-1.jpg',
        tags: ['FastFood', 'Pizzaa', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorotie: true,
        origins: ['persia', 'middle east', 'china'],
        star: 4.7,
        imageUrl: '/assets/image/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorotie: false,
        origins: ['germany', 'us'],
        star: 3.5,
        imageUrl: '/assets/image/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorotie: true,
        origins: ['belgium', 'france'],
        star: 3.3,
        imageUrl: '/assets/image/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorotie: false,
        origins: ['india', 'asia'],
        star: 3.0,
        imageUrl: '/assets/image/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorotie: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '/assets/image/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ];
  }
}
