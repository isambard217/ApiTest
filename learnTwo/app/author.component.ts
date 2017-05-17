import { Component } from '@angular/core';
import { AuthorService } from './author.service'; // DI


@Component({
    selector: 'author',
    templateUrl: 'app/Views/author.component.html',
    providers: [AuthorService] // DI
    
})

export class AuthorComponent {

    title: string = "The title for the authors page";
    authors;

    constructor (authorService : AuthorService) { // DI

        this.authors = authorService.getAuthors();

    }




}