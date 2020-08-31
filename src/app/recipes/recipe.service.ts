import {Recipe} from '../recipes/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingridient } from '../shared/ingridients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    private recipes:Recipe[] = [
        new Recipe('Test Recipe',
        ' test',
        'https://cookieandkate.com/images/2019/02/best-shakshuka-recipe-3-768x1154.jpg',
        [new Ingridient('meat',1),
        new Ingridient('buns',3)]),
        new Recipe('new Test Recipe',' test','https://cookieandkate.com/images/2019/02/best-shakshuka-recipe-3-768x1154.jpg',
        [new Ingridient('rice',2),
        new Ingridient('corn',4)])
    ];
    constructor(private slSrvice:ShoppingListService){
        
    }
    getRecipes(){
        return this.recipes.slice();
    }

    recipeSelected=new EventEmitter<Recipe>();

    addIngridientsToShoppingList=(ingridients:Ingridient[])=>{
        console.log(ingridients);
        ingridients.forEach(ingridient=>{
            this.slSrvice.addIngridient(ingridient);
        })
    }

}