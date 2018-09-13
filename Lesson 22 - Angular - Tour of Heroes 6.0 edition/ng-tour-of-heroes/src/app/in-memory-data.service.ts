import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  
  public createDb() {
    const HEROES: Hero[] = [
      { id: 1, name: 'XMen' },
      { id: 2, name: 'Superman' },
      { id: 3, name: 'Shrek' },
      { id: 4, name: 'Batman' },
      { id: 5, name: 'Hulk' },
      { id: 6, name: 'SpiderMan' },
      { id: 7, name: 'Lobo' },
      { id: 8, name: 'Thor' },
      { id: 9, name: 'IronMan' },
      { id: 10, name: 'WonderWoman' }
    ];

    return { HEROES };
  }
}
