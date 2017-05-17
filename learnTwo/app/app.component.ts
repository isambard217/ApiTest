import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/Views/app.component.html'
  /*template: `
          <h1> {{ title }} </h1>
          <h1 [textContent]="title"></h1>
  
  `*/
})
export class AppComponent {

    title: string = "Angular App";
    isActive: Boolean = true;

    imageUrl = "http://assets.nydailynews.com/polopoly_fs/1.2444118.1448304691!/img/httpImage/image.jpg_gen/derivatives/article_750/crd205-000084-tif.jpg";

    post = {
        title: "Title",
        isFavourite: true
    }

    constructor(){
    }

    onClick(){
    }

    onFavouriteChange($event) {
        console.log($event);
    }

 }
