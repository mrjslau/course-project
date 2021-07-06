import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('lettuce', 1),
        new Ingredient('dressing', 1)
    ];

    addIngredient(name: string, amount: number) {
        this.ingredients.push(new Ingredient(name, amount));
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(newIngredients: Ingredient[]) {
        // newIngredients.forEach( (element) => {
        //     this.ingredients.push(element);
        // });
        this.ingredients.push(...newIngredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice();
    }
}