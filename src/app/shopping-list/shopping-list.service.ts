import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<Ingredient>();

    private ingredients: Ingredient[] = [
        new Ingredient('lettuce', 1),
        new Ingredient('dressing', 1)
    ];

    addIngredient(name: string, amount: number) {
        this.ingredients.push(new Ingredient(name, amount));
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(newIngredients: Ingredient[]) {
        // newIngredients.forEach( (element) => {
        //     this.ingredients.push(element);
        // });
        this.ingredients.push(...newIngredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredientIndexByName(name: string) {
        var index = 0;

        for (let i of this.ingredients) {
            if (i.name === name) {
                return index;
            }

            index++;
        }

        return -1;
    }

    deleteIngredient(name: string) {
        const id = this.getIngredientIndexByName(name);
        if (id >= 0) {
            this.ingredients.splice(id, 1);
        }
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    changeAmount(name: string, amount: number) {
        const id = this.getIngredientIndexByName(name);
        this.ingredients[id].amount = amount;
    }
}