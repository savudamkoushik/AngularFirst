import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('Test Recipe',' test','https://cookieandkate.com/images/2019/02/best-shakshuka-recipe-3-768x1154.jpg'),
    new Recipe('new Test Recipe',' test','https://cookieandkate.com/images/2019/02/best-shakshuka-recipe-3-768x1154.jpg')
  ];

  @Output() recipeSelected=new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }


  onRecipeSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }

}
