import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//[class.isFavourite]="isFavourite" (click)="onClick()" 
//

// *<input type="text" [value]="title" (input)="title = $event.target.value" />*/

@Component({
    selector: "favourite",
    templateUrl: 'app/Views/favourite.component.html',      
    styles:[`
        .glyphicon-star{
            color:orange;
        }

    `]
})
export class FavouriteComponent {

    //Properties
    @Input() isFavourite = true;
    @Input() isReady = true;
     title: string = "";
    @Output() change = new EventEmitter();        

    OnInit(){}

    constructor(){}

    @Input()
    onClick(){
        this.isFavourite = !this.isFavourite;
        this.change.emit({ newValue: this.isFavourite });
    }

    hello(){
        alert("Hello World");
    }


    /*
    <div>
    <input type="text" [(ngModel)]="title"/>

    <input type="button" (click)="title =''" value="Clear" />

    Preview:{{ title }}
    </div>    
    */

}