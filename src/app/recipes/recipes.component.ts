import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import {RecipeService} from '../recipes/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe:Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    console.log("entered");
    this.recipeService.recipeSelected.subscribe((recipe:Recipe)=>{
      this.selectedRecipe=recipe;
      console.log(this.selectedRecipe);
    })
  }

}
