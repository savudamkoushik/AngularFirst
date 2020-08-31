import { Component, OnInit } from '@angular/core';
import {Ingridient} from '../shared/ingridients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  ingridients:Ingridient[];
  constructor(private ingrService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingridients=this.ingrService.getIngridients();
    this.ingrService.ingridientChanged.subscribe((ingridients:Ingridient[])=>{
      this.ingridients=ingridients;
    });
  }
  // onIngridientAdded(ingridient:Ingridient){
  //   console.log(ingridient);
  //   this.ingrService.addIngridient(ingridient);
  //   this.ingrService.loggingInfo();
    
  // }

}
