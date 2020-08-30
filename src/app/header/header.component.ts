import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector:'header-component',
    templateUrl:'./header.component.html'
})

export class HeaderComponent{
    @Output() featureSelected=new EventEmitter<string>();
    onSelect(feature:string){
        console.log(feature);
        this.featureSelected.emit(feature);
    }
}