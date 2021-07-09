import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;

    constructor(private shoppingListService: ShoppingListService,
        private recipeService: RecipeService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params: Params) => {
                // console.log(this.route)
                // console.log(this.recipeService.getRecipe(+params['id']));
                this.recipe = this.recipeService.getRecipe(+params['id']);
                // console.log(+params['id'])
            }
        );
    }

    onAddToListClicked() {
        this.shoppingListService.addIngredients(this.recipe.ingredients);
    }

    onDelete() {
        this.recipeService.deleteRecipe(this.recipe.id);
        this.router.navigate(['../'], {relativeTo: this.route})
    }
}
