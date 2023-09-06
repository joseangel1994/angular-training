import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EMPTY, mergeMap } from 'rxjs';
import { Recipe } from 'src/app/interfaces/Recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe!: Recipe;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipeById();
  }

  getRecipeById() {
    this.route.paramMap.pipe(
      mergeMap(params => {
        const id = params.get('id');
        return  id ? this.recipeService.getRecipeById(id) : EMPTY;
      })
    ).subscribe(_recipe => this.recipe = _recipe);
  }

}


