import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { recipesDummy } from 'src/app/dummy-data';
import { Recipe } from 'src/app/interfaces/Recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() title!: string;

  @Output() newConsoleEvent = new EventEmitter<string>();

  recipes: Array<Recipe> = recipesDummy;

  constructor() { }

  ngOnInit(): void {
    this.addNewConsoleMessage();
  }

  addNewConsoleMessage() {
    this.newConsoleEvent.emit('Ey, listen!');
  }

}
