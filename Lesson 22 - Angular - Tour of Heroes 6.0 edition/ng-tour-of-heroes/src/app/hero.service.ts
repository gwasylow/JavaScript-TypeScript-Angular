import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //define default address of heroes on the server (in-memory-web-api)
  private heroesUrlEndPoint = 'api/heroes';
  //http configuration
  private httpOptions = { 
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http : HttpClient,
    private messagesService : MessagesService) 
  {       
  }

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any) : Observable<T> => {
      //log an error to console
      console.error(error);

      //log info to service
      this.log(`${operation} failed: ${error.message}`);

      //let the app running by retunring an empty result
      return of(result as T);
    }
  }

  public getHeroes() : Observable<Hero[]> 
  {
    this.messagesService.Add("Hero service fetched the data successfully");

    return this.http.get<Hero[]>(this.heroesUrlEndPoint)
      .pipe(
        tap(heroes => this.log('Fetched heroes from in-memory-web-api...')),
        catchError(this.handleError('getHeroes', []))
      );
  }
  
  public getHeroById(id : number) : Observable<Hero> 
  {
    this.messagesService.Add(`Hero service fetched single hero with id=${id}`);
    
    //create end point url for in-memory-web-api
    const url = `${this.heroesUrlEndPoint}/${id}`;

    return this.http.get<Hero>(url)
      .pipe(
        tap(obj => this.log(`Single Hero with id=${id} loaded successfully`)),
        catchError(this.handleError<Hero>(`get Hero method failed for id=${id}`))
      );
  }
  
  private log(message : string) : void {
    this.messagesService.Add(`Hero.Service log: ${message}`)
  }

  public updateHero(hero : Hero) : Observable<any>
  {
    return this.http.put(this.heroesUrlEndPoint, hero, this.httpOptions)
      .pipe(
        tap(obj => this.log(`Hero with id=${hero.id} updated`)),
        catchError(this.handleError<Hero>(`Hero Update failed for id=${hero.id}`))
      );
  }

  public addHero(hero : Hero) : Observable<Hero>
  {
    return this.http.post<Hero>(this.heroesUrlEndPoint, hero, this.httpOptions)
      .pipe(
        tap(obj => this.log(`Hero with id=${hero.id} updated`)),
        catchError(this.handleError<Hero>(`Hero Update failed for id=${hero.id}`))
      );
  }
}
