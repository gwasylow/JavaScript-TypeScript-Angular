import { Component } from '@angular/core';
import { FootballService } from './services/football.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Frontend-Angular';

  constructor(private _footballService: FootballService ) {
    _footballService.getFootballLadder().subscribe(data => {
      console.log(data);
    });
  }

}
