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
  public selectedHero : Hero;

  constructor(private heroService : HeroService,
    private messagesService : MessagesService) { }

  ngOnInit() {
    this.getHeroes();
  }

  public getHeroes() : void {
    //Data will be loaded asynchroniously from a Hero Service using Dependency Injection.
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.messagesService.Add(`${hero.name} has been selected from a list of Heroes.`);
    this.selectedHero= hero;
  }
}

