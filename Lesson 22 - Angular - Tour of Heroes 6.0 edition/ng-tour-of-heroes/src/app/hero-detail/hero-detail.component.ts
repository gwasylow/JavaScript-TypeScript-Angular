import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero : Hero;

  constructor(private messagesService : MessagesService) { }

  ngOnInit() {
  }

  public onHeroNameChange(event: any) : void {
    this.messagesService.Add(`${event.target.value} name changed`);
  }

}
