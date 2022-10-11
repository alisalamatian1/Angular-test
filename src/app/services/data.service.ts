import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { NotFoundException } from '../common/notFound.exception';
import { AppException } from '../common/app.exception';
import { throwError } from 'rxjs';

export class DataService {
  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url).pipe(
      catchError(error => {
        if (error.status === 404) {
          return throwError(new NotFoundException);
        } else {
          return throwError(new AppException(error));  
        }
      })
    );
      
  }

  get(id : any) { 
    return this.http.get(this.url + '/' + id).pipe(
      catchError(error => {
        if (error.status === 404) {
          return throwError(new NotFoundException);
        } else {
          return throwError(new AppException(error));  
        }
      })
    ); 
  }

  create(resource: any) {
    return this.http.post(this.url, JSON.stringify(resource))
    .pipe(
      catchError(error => {
        if (error.status === 404) {
          return throwError(new NotFoundException);
        } else {
          return throwError(new AppException(error));  
        }
      })
    );
  }

  update(resource :any) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
    .pipe(
      catchError(error => {
        if (error.status === 404) {
          return throwError(new NotFoundException);
        } else {
          return throwError(new AppException(error));  
        }
      })
    );
  }

  delete(id:any) {
    return this.http.delete(this.url + '/' + id)
    .pipe(
      catchError(error => {
        if (error.status === 404) {
          return throwError(new NotFoundException);
        } else {
          return throwError(new AppException(error));  
        }
      })
    );
  }
}
