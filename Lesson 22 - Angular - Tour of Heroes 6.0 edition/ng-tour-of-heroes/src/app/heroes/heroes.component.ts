import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service'
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  public heroes : Hero[];
  
  constructor(private heroService : HeroService,
    private messagesService : MessagesService) { }

  ngOnInit() {
    this.getHeroes();
  }

  public getHeroes() : void {
    //Data will be loaded asynchroniously from a Hero Service using Dependency Injection.
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  public addHero(name : string) : void{
    name = name.trim();

    if(!name)
      return;
    
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => this.heroes.push(hero));
  }

  public deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}

