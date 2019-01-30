import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  public profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['Kowalski', Validators.required],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      country: ['Poland']
    }),
    aliases: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  public onFormSubmit() {

  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  public addControlDynamicallyToAliases() {
    this.aliases.push(this.formBuilder.control(''));
    console.log("new Controll Added");
  }


}
