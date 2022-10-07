import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http : HttpClient) { 

  }

  getPost() {
    return this.http.get(this.url, {observe: 'body', responseType: 'json'});
  }

  createPost(post: any) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post : any) {
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post), {observe: 'response'})
  }

  deletePost(post: any) {
    return this.http.delete(this.url + '/' + post.id, {observe: 'response'}).pipe(
      retry(1), catchError(error => {
        return throwError(error.message);
      }));
  }
}
