import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagesService : MessagesService) { }

  public getHeroes() : Observable<Hero[]> 
  {
    this.messagesService.Add("Hero service fetched the data successfully");
    return of (HEROES);
  }
}
