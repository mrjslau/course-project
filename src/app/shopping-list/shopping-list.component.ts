import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    private igChangeSub: Subscription;
    ingredients: Ingredient[] = [];

    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit(): void {
        this.ingredients = this.shoppingListService.getIngredients();
        this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
            (newIngredients: Ingredient[]) => { this.ingredients = newIngredients }
        );
    }

    ngOnDestroy() {
        this.igChangeSub.unsubscribe();
    }

    onEdit(ingredient: Ingredient) {
        this.shoppingListService.startedEditing.next(ingredient);
    }
}
