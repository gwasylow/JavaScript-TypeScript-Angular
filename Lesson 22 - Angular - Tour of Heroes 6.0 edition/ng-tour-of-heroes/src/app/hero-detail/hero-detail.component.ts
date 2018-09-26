import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { MessagesService } from '../messages.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero : Hero;

  constructor(private messagesService : MessagesService,
              private heroService : HeroService,
              private route : ActivatedRoute,
              private location : Location) { }

  ngOnInit() { 
    this.getHero();
  }

  public getHero() : void {
    const id =  Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroById(id).subscribe(hero => this.hero = hero);
  }

  public onHeroNameChange(event: any) : void {
    this.messagesService.Add(`${event.target.value} name changed`);
  }

  public goBack() : void {
    this.location.back();
  }

  public save() : void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
