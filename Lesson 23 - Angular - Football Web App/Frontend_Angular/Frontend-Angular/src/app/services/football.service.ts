import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  private _endPointUrl = 'http://localhost:49712/api/ladder'

  constructor(private http: HttpClient) { }

  public getFootballLadder(): Observable<models.LadderNode> {
    return this.http.get<models.LadderNode>(this._endPointUrl)
            .pipe(catchError(this.handleError<models.LadderNode>('getFootballLadder', null))) ; 
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
