import { Component } from '@angular/core';


@Component({
    template: `{{ counter }} <i 
               class="glyphicon glyphicon-heart"
               [class.isClicked] = isClicked
               [class.isNotClick] = !isClicked
               (click)="onClick()"
               ></i>`,
    selector: "heart"           


})
export class HeartComponent {

    isClicked : boolean = false;
    counter = 10;

    onClick() { 

       // this.isClicked  == true ? ++ this.counter : -- this.counter;

        if (this.isClicked == true)
        {
            --this.counter;

        } else {

            ++this.counter;
        }

        this.isClicked = !this.isClicked;

    }


}