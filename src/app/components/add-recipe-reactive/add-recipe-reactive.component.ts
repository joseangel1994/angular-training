import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-recipe-reactive',
  templateUrl: './add-recipe-reactive.component.html',
  styleUrls: ['./add-recipe-reactive.component.css']
})
export class AddRecipeReactiveComponent implements OnInit {

  newRecipeForm = new FormGroup({
    mainIngredient: new FormControl('', [
      Validators.required
    ]),
    numberOfPeople: new FormControl(0),
    allergie: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  submitNewRecipe() {
    if(this.newRecipeForm.valid) {
      console.log(`New recipe received: mainIngredient: ${this.newRecipeForm.value.mainIngredient}, numberOfPeople: ${this.newRecipeForm.value.numberOfPeople}, allergie: ${this.newRecipeForm.value.allergie}.`);
    } else {
      console.log('Form is invalid, please check the fields again')
    }
  }

}