import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-archive',
    templateUrl: './archive.component.html',
    styleUrls: ['./archive.component.css']
  })
export class ArchiveComponent {
    year : any;
    month : any;
    constructor (private router: ActivatedRoute, private navigator : Router) {}

    ngOnInit() {
        this.router.paramMap
        .subscribe(params => {
            this.year = params.get('year');
            this.month = params.get('month')
        })
    }

    click(){
        this.navigator.navigate([''], {
            queryParams: {
                page : 0,
                order : 'newest'
            }
        })
    }
    
}