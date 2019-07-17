import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  private _endPointUrl = 'http://localhost:49712/api/ladder';

  constructor(private http: HttpClient) { }


  public getFootballLadder(): Observable<LadderNode> {
    return this.http.get<LadderNode>(this._endPointUrl)
  }

  public getString(): Observable<string> {
    return of("Test") ; 
  }


  // public getObject(): Observable<Team> {
  //   return of({id: 1, name: 'Test name'}); 

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
