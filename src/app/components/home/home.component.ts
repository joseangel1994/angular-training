import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, catchError, filter, map, tap } from 'rxjs';

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
    // this.getRecipesSubscribe();
    this.getRecipesPipe();
  }
  
  getRecipesSubscribe() {
    this.recipeService.getRecipes().subscribe({
      next: (data) => {
        this.recipes = data.map(recipe => ({...recipe, name: recipe.name.toUpperCase()}));
      },
      error: (e) => console.error(e)
    });
  }

  getRecipesPipe() {
    this.recipeService.getRecipes()
      .pipe(
        map(recipes => recipes.map(recipe => ({...recipe, name: recipe.name.toUpperCase()}))),
        catchError((error) => {
          console.log(error);
          return EMPTY;
        })
      ).subscribe(data => this.recipes = data)
  }

  filterRecipes(value: string) {
    this.recipeService.getRecipes()
      .pipe(
        map(recipes => recipes.filter(({name: recipeName}) => recipeName.includes(value)))
      ).subscribe(data => this.recipes = data)
    // this.recipes = recipesDummy.filter(({name: recipeName}) => recipeName.includes(value));
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
