import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  baseUrl = 'http://localhost:3002/api/countries';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

  constructor(private http: HttpClient) {}

  getComments(id: string): Observable<any> {
    return this.http
      .get<any>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError<any>('getComments', [])));
  }

  postComment(id: string, comment: string): Observable<any> {
    return this.http
      .post<any>(`${this.baseUrl}/${id}`, { comment }, this.httpOptions)
      .pipe(catchError(this.handleError<any>('postComment')));
  }
}
