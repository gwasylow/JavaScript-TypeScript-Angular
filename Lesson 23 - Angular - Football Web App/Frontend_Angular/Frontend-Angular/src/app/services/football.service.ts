import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ViewModels } from '../models/football';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  private _endPointUrl = 'https://webapp01eur.azurewebsites.net/api/ladder';

  constructor(private http: HttpClient) { }

  public getFootballLadder(): Observable<ViewModels.LadderNode> {
    return this.http.get<ViewModels.LadderNode>(this._endPointUrl)
            .pipe(catchError(this.handleError<ViewModels.LadderNode>('getFootballLadder', null))) ; 
  }

  public getString(): Observable<string> {
    return of("Test") ; 
  }

  public getObject(): Observable<ViewModels.TeamA> {
    return of({id: 1, name: 'Test name'}) ; 
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
