import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score-view',
  templateUrl: './score-view.component.html',
  styleUrls: ['./score-view.component.css']
})
export class ScoreViewComponent implements OnInit {

  @Input()
  ladderNode: any;

  constructor() { 
  }

  ngOnInit() {
  }

}