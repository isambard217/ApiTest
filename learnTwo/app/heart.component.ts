import { Component } from '@angular/core';


@Component({
    template: `<i 
               class="glyphicon-heart"
               [class.isClicked] = isClicked
               [class.isNotClick] = !isClicked
               ></i>`,
    selector: "heart"           


})
export class HeartComponent {

    isClicked : boolean = false;
    counter = 10;

    onClick() { 

        this.isClicked  == true ? ++ this.counter : -- this.counter;

        this.isClicked = !this.isClicked;

    }


}