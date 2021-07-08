import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
    constructor(private shoppingListService: ShoppingListService) { }

    onSubmit(form: NgForm) {
        const name = form.controls['name'].value;
        const amount = form.controls['amount'].value;

        this.shoppingListService.addIngredient(
            name, amount
        );
    }

}
