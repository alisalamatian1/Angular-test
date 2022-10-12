import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent {

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }
  followers: any;

  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .subscribe(combined => {
      let id = combined[0].get('id');
      // in real application we would use id to get all
      this.service.getAll()
        .subscribe(followers => this.followers = followers);
    })
  }
}
