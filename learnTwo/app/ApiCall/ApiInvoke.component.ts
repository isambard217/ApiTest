import { Component } from "@angular/core";
import { ApiService } from "./ApiService.service"; 

@Component({
    selector: "ApiTest",
    template: ` 
                    <label> Submit </label>
                  <input type="submit" (click)="GetCarsFromApi()"/>
                `

})
export class ApiInvoke {


       constructor (private apiservice : ApiService){

       }

       GetCarsFromApi() {

            this.apiservice.getVehicles()
                    .subscribe(res => {
                           console.log(res); 
                    });  

       }

            /*
            this._githubService.getUser(this.username)
                .subscribe(result => {
                    this.user = result;
                    console.log(result);
                });*/

}