import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrlEndPoint = 'api/heroes'; //define default address of heroes on the server (in-memory-web-api)

  constructor(private http : HttpClient,
    private messagesService : MessagesService
    ) { }

  public getHeroes() : Observable<Hero[]> 
  {
    this.messagesService.Add("Hero service fetched the data successfully");
    return this.http.get<Hero[]>(this.heroesUrlEndPoint);
      /*.pipe(
        tap(heroes => this.log('fetched heroes'))
      );*/
  }
  
  public getHeroById(id : number) : Observable<Hero> 
  {
    this.messagesService.Add(`Hero service fetched single hero with id=${id}`);
    return new Observable<Hero>();//of(HEROES.find(hero => hero.id === id));
  }
  
  private log(message : string) : void {
    this.messagesService.Add(`Hero.Service log: ${message}`)
  }
}
