import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient('lettuce', 1),
        new Ingredient('dressing', 1)
    ];

    addIngredient(name: string, amount: number) {
        this.ingredients.push(new Ingredient(name, amount));
    }
}