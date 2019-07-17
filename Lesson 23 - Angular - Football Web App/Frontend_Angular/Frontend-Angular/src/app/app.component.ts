import { Component, OnInit } from '@angular/core';
import { FootballService } from './services/football.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'Frontend-Angular';
  public ladderModel: LadderNode;
  public strTest: string;
  public objTest: Team;

  constructor(private _footballService: FootballService ) {
  }

  ngOnInit(): void {
    this._footballService.getFootballLadder().subscribe(data => {
      this.ladderModel = data;
      console.log('App.component: ' + this.ladderModel);
      console.log(this.ladderModel.teamA.name);
    });

    // this._footballService.getString().subscribe(data => {
    //   this.strTest = data;
    //   // console.log(this.strTest);
    // })

    // this._footballService.getObject().subscribe(data => {
    //   this.objTest = data;
    //   console.log(this.objTest);
    // })
  }
}
