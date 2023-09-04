import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { AboutComponent } from './components/about/about.component';
import { AddRecipeReactiveComponent } from './components/add-recipe-reactive/add-recipe-reactive.component';
import { AddRecipeTemplateDrivenComponent } from './components/add-recipe-template-driven/add-recipe-template-driven.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recipe/add-reactive', component: AddRecipeReactiveComponent },
  { path: 'recipe/add-template-driven', component: AddRecipeTemplateDrivenComponent },
  { path: 'recipe/:id', component: RecipeDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}


