import { Injectable } from '@angular/core';
import { recipesDummy } from '../dummy-data';
import { Recipe } from '../interfaces/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Array<Recipe> {
    return recipesDummy;
  }
}
