import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";

import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({ providedIn: 'root' })
export class DataStorageService {

  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.httpClient.put(
      'https://course-project-angular-2021-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
      recipes
    )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {

    return this.httpClient.get<Recipe[]>(
      'https://course-project-angular-2021-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
    )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
          });
        }),
        tap(recipes => {
          this.recipeService.overwriteRecipes(recipes);
        })
      )
  }
}