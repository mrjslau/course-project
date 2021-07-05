import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedSection = new EventEmitter<number>();

  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  recipesSelected() {
    this.selectedSection.emit(0);
  }

  shoppingListSelected() {
    this.selectedSection.emit(1);
  }
}
