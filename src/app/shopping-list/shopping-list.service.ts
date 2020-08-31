import {Ingridient} from '../shared/ingridients.model';
import { EventEmitter } from '@angular/core';
export class ShoppingListService{  
    ingridientChanged=new EventEmitter<Ingridient[]>();
    private ingridients:Ingridient[]=[
        new Ingridient('Ingridient',123),
        new Ingridient('tomato',34)
    ];
    getIngridients=()=>this.ingridients.slice();
    addIngridient=(ingridient:Ingridient)=>{
        this.ingridients.push(ingridient);
        this.ingridientChanged.emit(this.ingridients.slice());
    }
    loggingInfo=()=>console.log(this.ingridients);
 }