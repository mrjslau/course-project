import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayRecipes = true;
  displayShoppingList = false;
  
  displaySection(id: number) {
    if (id == 0) {
      this.displayRecipes = true;
      this.displayShoppingList = false;
    } else {
      this.displayRecipes = false;
      this.displayShoppingList = true;
    }
  }
}
