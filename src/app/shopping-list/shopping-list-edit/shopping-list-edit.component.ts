import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
    @ViewChild('f', {static: false}) form: NgForm;
    subscription: Subscription;
    editMode = false;

    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit() {
        this.subscription = this.shoppingListService.startedEditing.subscribe(
            (ingredient: Ingredient) => {
                this.editMode = true;

                this.form.setValue({
                    'name': ingredient.name,
                    'amount': ingredient.amount
                })
            }
        );
    }

    onSubmit(form: NgForm) {
        const name = form.controls['name'].value;
        const amount = form.controls['amount'].value;

        if (!this.editMode) {
            this.shoppingListService.addIngredient(
                name, amount
            );
        } else {
            this.shoppingListService.changeAmount(
                name, amount
            );
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
