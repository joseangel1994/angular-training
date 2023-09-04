import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { recipesDummy } from 'src/app/dummy-data';
import { Recipe } from 'src/app/interfaces/Recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipes: Array<Recipe> = recipesDummy;
  displayFooter: boolean = true;

  title = 'My Recipes';

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  filterRecipes(value: string) {
    this.recipes = recipesDummy.filter(({name: recipeName}) => recipeName.includes(value));
  }

  navigateToAbout() {
    this.router.navigate(['/about']);
  }

  navigateToNewRecipeReactive() {
    this.router.navigate(['/recipe/add-reactive']);
  }

  navigateToNewRecipeTemplateDriven() {
    this.router.navigate(['/recipe/add-template-driven']);
  }

}
