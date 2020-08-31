import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName',{static:false}) ingridientName:ElementRef;
  @ViewChild('inputAmount',{static:false}) ingridientAmount:ElementRef;

  // @Output() ingridientAdded=new EventEmitter<Ingridient>();
  

  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit(): void {
  }
  onIgridientAdded(){
    const ingrName=this.ingridientName.nativeElement.value;
    const ingrAmount=this.ingridientAmount.nativeElement.value;
    const newIngridient=new Ingridient(ingrName,ingrAmount);
    // this.ingridientAdded.emit(newIngridient);
    this.shoppingService.addIngridient(newIngridient);

  }
  onIngridientDeleted(){
    
  }

}
