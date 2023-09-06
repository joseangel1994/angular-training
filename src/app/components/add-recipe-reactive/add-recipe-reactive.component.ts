import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe-reactive',
  templateUrl: './add-recipe-reactive.component.html',
  styleUrls: ['./add-recipe-reactive.component.css']
})
export class AddRecipeReactiveComponent implements OnInit {
  submitted: boolean = false;
  saving: boolean = false;

  newRecipeForm = new FormGroup({
    mainIngredient: new FormControl('', [
      Validators.required
    ]),
    allergie: new FormControl('Nothing'),
    numberOfPeople: new FormControl(0, [
      Validators.required,
      Validators.min(1)
    ])
  });

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
  }

  submitNewRecipe() {
    this.submitted = true;
    if (this.newRecipeForm.valid && this.newRecipeForm.value.mainIngredient && this.newRecipeForm.value.numberOfPeople && this.newRecipeForm.value.allergie) {
      this.saving = true;
      this.recipeService
        .addRecipe(this.newRecipeForm.value.mainIngredient, this.newRecipeForm.value.numberOfPeople, this.newRecipeForm.value.allergie)
        .subscribe(recipe => {
          this.saving = false;
          console.log(recipe);
          this.router.navigate(['']);
        })
    } else {
      console.log('Form is invalid, please check the fields again');
    }
  }

}
