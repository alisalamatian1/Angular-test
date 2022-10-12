import { ArchiveComponent } from './home/archive.component';
import { GithubFollowersService } from './services/github-followers.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppErrorHandler } from './common/app.errorhandler';
import { ErrorHandler } from '@angular/core';
import { PostService } from './services/post.service';
import { PostComponent } from './post.component';
import { TitleComponent } from './title.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AuthorService } from './author.service';
import { AuthorComponent } from './author.component';
import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    TitleComponent,
    PostComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // the order of these are important
    // we have to put the more specific path on the top
    RouterModule.forRoot(
      [
        // array of our paths and corresponding component
        {
          path: '',
          component: HomeComponent
        },
        {
          path: 'archive/:year/:month',
          component: ArchiveComponent
        },
        {
          path: 'followers/:id/:username',
          component: GithubProfileComponent
        },
        {
          path: 'followers',
          component: GithubFollowersComponent
        },
        {
          path: 'posts',
          component: PostComponent
        },
        {
          path: '**',
          component: NotFoundComponent
        }
      ]
    )
  ],
  providers: [
    CoursesService, AuthorService, PostService, GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
