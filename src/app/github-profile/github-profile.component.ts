import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe(combined => {
      let id = combined[0].get('id');
      let username = combined[0].get('username')
      let test = combined[1].get('test')
      console.log(id)
      console.log(test)
      console.log(username)
    })
    // this.route.paramMap
    //   .subscribe(params =>{
    //     let id = params.get('id');
    //     console.log(id);
        // in real application we would make the following
        // service.getProfile(id)
      // })
  }

}
