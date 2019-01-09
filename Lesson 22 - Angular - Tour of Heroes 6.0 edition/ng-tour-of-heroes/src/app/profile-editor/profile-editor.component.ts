import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  public profileEditForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
      addressDetailes: new FormGroup({
        street: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        country: new FormControl('', Validators.required)
      })
  });

  constructor() { }

  ngOnInit() {
  }

  public onFormSubmit() {
    console.log(this.profileEditForm.value);
  }

  public updateProfile() {
    // patchValue() method does not require
    // description of all controls, it is matching
    // existing controls by a key name
    // if key does not exist nothing happenes
    this.profileEditForm.patchValue({
      firstName: 'Dżejson',
      xxyz: 'Krakow',
      addressDetailes: {
        country: 'Polska'
      }
    });
  }

  public resetProfile() {
    // setValue() method requires to predefine
    // all keys (forms structure) with no exceptions
    this.profileEditForm.setValue({
      firstName: 'Dżejsika',
      lastName: null,
      addressDetailes: {
        street: null,
        city: 'Sosnovitz',
        country: 'Polen'
      }
    });
  }
}
