import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  baseUrl = 'https://evening-island-76065.herokuapp.com/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':
        'https://evening-island-76065.herokuapp.com',
    }),
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
      .get<any>(`${this.baseUrl}/countries/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<any>('getComments', [])));
  }

  postComment(id: string, comment: string): Observable<any> {
    return this.http
      .post<any>(
        `${this.baseUrl}/countries/${id}`,
        { comment },
        this.httpOptions
      )
      .pipe(catchError(this.handleError<any>('postComment')));
  }

  deleteComment(commentId: string): Observable<any> {
    return this.http
      .delete<any>(`${this.baseUrl}/comments/${commentId}`, this.httpOptions)
      .pipe(catchError(this.handleError<any>('deleteComment')));
  }
}
