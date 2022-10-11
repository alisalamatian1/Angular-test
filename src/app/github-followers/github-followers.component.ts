import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent {

  constructor(private service: GithubFollowersService) { }
  followers: any;
  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }
}
