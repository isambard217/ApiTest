import { Component, Input } from '@angular/core';


@Component({
    selector: "voter",
    //styleUrls: "../Views/voter.component", 
    templateUrl: 'app/Views/voter.component.html',

})
export class VoterComponent {

        track : number = 0;
        counter : number = 10;

        onUp(){

            if(this.track ==1){

            } else{
                ++this.counter;
            }
            this.track = 1;
        }

        OnDown(){

            if(this.track == 1)
            {

            }else {
                --this.counter;
            }
            --this.counter;


        }

}