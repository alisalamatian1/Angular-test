import { AuthorService } from './author.service';
import { Component } from "@angular/core";

@Component({
    selector: 'authors',
    template: `<h2>
        <ul>
            <li *ngFor= "let author of authors">
            {{author}}
            </li>
        </ul>
    </h2>`   
})
export class AuthorComponent {
    authors;

    constructor (service: AuthorService) {
        this.authors = service.getAuthor();
    }
    getAuthors(){
        return this.authors;
    }
}   