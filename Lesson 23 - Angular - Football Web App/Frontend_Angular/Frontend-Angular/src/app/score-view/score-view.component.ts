<<<<<<< HEAD
import { LadderNodeModel, Team } from './../models/football';
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, Input } from '@angular/core';
import { ViewModels } from '../models/football';
>>>>>>> 5a663ac8ea57d6625fdfd674736363599ca19579

@Component({
  selector: 'app-score-view',
  templateUrl: './score-view.component.html',
  styleUrls: ['./score-view.component.css']
})
export class ScoreViewComponent implements OnInit {

<<<<<<< HEAD
  public _ladderNodeModel : LadderNodeModel = new LadderNodeModel();

  constructor() {
    this._ladderNodeModel.teamA = new Team(1, "Dupa 1");
    this._ladderNodeModel.teamB = new Team(2, "Dupa 2");
    this._ladderNodeModel.winningTeam = new Team(3, "Dupa 3");
    
    // this._ladderNodeModel =
    // { 
    //   TeamA : new Team(1, "Dupa 1"),
    //   TeamB : new Team(2, "Doarian 6"),
    //   WinningTeam : this._ladderNodeModel.teamA
    // }
=======
  @Input()
  ladderNode: any;

  constructor() { 
>>>>>>> 5a663ac8ea57d6625fdfd674736363599ca19579
  }

  ngOnInit() {
  }

}