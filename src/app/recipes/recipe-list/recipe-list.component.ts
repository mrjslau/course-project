import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Tasty Salad', 'https://image.brigitte.de/11711448/t/KU/v3/w960/r1/-/caesars-salad.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
