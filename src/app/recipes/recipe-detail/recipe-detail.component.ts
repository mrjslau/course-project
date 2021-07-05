import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  @ViewChild('ingredient') ingredientRef: ElementRef; //FIX

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddToListClicked() {
    var str = this.ingredientRef.nativeElement.value;
    console.log(str); //FIX

    //this.shoppingListService.addIngredient
  }
}
