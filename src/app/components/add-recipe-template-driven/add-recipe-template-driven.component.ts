import { Component, OnInit, ViewChild } from '@angular/core';
import { Recipe } from 'src/app/interfaces/Recipe';

type RecipeFormModel = {
  mainIngredient: string,
  allergie: string,
  numberOfPeople: number
};

@Component({
  selector: 'app-add-recipe-template-driven',
  templateUrl: './add-recipe-template-driven.component.html',
  styleUrls: ['./add-recipe-template-driven.component.css']
})
export class AddRecipeTemplateDrivenComponent implements OnInit {
  submitted: boolean = false;

  newRecipe: RecipeFormModel = {
    mainIngredient: '',
    allergie: 'Nothing',
    numberOfPeople: 0
  };

  @ViewChild('recipeForm') recipeForm: any;

  constructor() { }

  ngOnInit(): void {
  }

  submitNewRecipe() {
    this.submitted = true;
    if(this.recipeForm.valid) {
      console.log(`New recipe received: mainIngredient: ${this.newRecipe.mainIngredient}, numberOfPeople: ${this.newRecipe.numberOfPeople}, allergie: ${this.newRecipe.allergie}.`);
    } else {
      console.log('Form is invalid, please check the fields again');
    }
  }

}
