import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css'],
})
export class FoodpageComponent implements OnInit {
  foods!:Foods
  this: any;
  constructor(activatedRoute: ActivatedRoute, private api: FoodService) {
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      this.this.foods=api.getAllFoodByTag(params['id'])
    })
  }
  ngOnInit(): void {

  }
}