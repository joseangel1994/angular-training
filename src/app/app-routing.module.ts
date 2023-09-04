import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { AboutComponent } from './components/about/about.component';
import { AddRecipeReactiveComponent } from './components/add-recipe-reactive/add-recipe-reactive.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'recipe/add-reactive', component: AddRecipeReactiveComponent },
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


