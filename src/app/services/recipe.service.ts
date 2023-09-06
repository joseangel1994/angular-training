import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/Recipe';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
}


