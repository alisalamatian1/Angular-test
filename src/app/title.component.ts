import { Component } from "@angular/core";

@Component ({
    selector: 'app-title',
    templateUrl: './title.component.html'
})
export class TitleComponent {
    title : string = "";
    getTitle() {
        return this.title;
    }
}