import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { AboutComponent } from './components/about/about.component';
import { AddRecipeReactiveComponent } from './components/add-recipe-reactive/add-recipe-reactive.component';
import { AddRecipeTemplateDrivenComponent } from './components/add-recipe-template-driven/add-recipe-template-driven.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    AboutComponent,
    AddRecipeReactiveComponent,
    AddRecipeTemplateDrivenComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
