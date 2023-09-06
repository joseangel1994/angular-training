import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/Recipe';
import { Observable, mergeMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  url: string = 'http://localhost:3000/recipes'

  constructor(private httpClient: HttpClient) { }

  // GET recipes from the server
  getRecipes(): Observable<Array<Recipe>> {
    return this.httpClient.get<Array<Recipe>>(this.url);
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this.httpClient.get<Recipe>(`${this.url}/${id}`);
  }

  saveRecipe(recipe: Recipe) {
    return this.httpClient.post<Recipe>(this.url, recipe);
  }

  addRecipe(mainIngredient: string, numberOfPeople: number, allergie: string) {
    const url = 'https://api.openai.com/v1/chat/completions';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + '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' });
    const body = {
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "user",
          "content": `Recipe with a title for ${numberOfPeople} people with allergie to ${allergie} and containing ${mainIngredient} in the ingredient list. Answer just the json with the following info: {\n    name: string;\n    description: string;\n    tags: Array<string>;\n    ingredients: Array<string>;\n    steps: Array<string>;\n    photo: string;\n}`
        }
      ]
    }
    return this.httpClient.post(url, body, {headers})
    .pipe(
      mergeMap((response: any) => {
        const content = response.choices[0].message.content;
        return this.saveRecipe(JSON.parse(content))
      })
    );
  }
}


