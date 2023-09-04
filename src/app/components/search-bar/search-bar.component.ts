import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchValue: string = '';

  @Output() searchRecipeEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  searchRecipe() {
    this.searchRecipeEvent.emit(this.searchValue);
  }

}
