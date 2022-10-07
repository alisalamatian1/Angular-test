import { PostService } from './services/post.service';
import { PostComponent } from './post.component';
import { TitleComponent } from './title.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AuthorService } from './author.service';
import { AuthorComponent } from './author.component';
import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    TitleComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CoursesService, AuthorService, PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
