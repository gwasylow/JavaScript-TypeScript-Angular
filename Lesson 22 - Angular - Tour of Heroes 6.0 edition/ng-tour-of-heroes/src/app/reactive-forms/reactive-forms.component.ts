import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  public name: FormControl = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  public updateReactiveFormByModel() {
    this.name.setValue('Xmass');
  }
}
