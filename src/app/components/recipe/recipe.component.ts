import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/Recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() recipe!: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
