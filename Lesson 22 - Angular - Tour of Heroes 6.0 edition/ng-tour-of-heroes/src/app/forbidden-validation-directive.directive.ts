import { Directive, Input, SimpleChange } from '@angular/core';
import { Validators, ValidatorFn, AbstractControl, NG_VALIDATORS } from '@angular/forms';

//Custom validator for directive using selector appForbidden

export function forbiddenNameValidator(name : RegExp) : ValidatorFn
{
  return (control : AbstractControl) : { [key : string] :any} => {
    const val = control.value;
    const check = name.test(val);

    return check ? { 'appForbiddenName' : {val} } : null;
  }
}

@Directive({
  selector: '[appForbiddenNameRequired]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidationDirectiveDirective, multi: true}]
})
export class ForbiddenValidationDirectiveDirective {

  @Input() appForbiddenName : string;
  private _valFun = Validators.nullValidator;

  constructor() { }

//A lifecycle hook that is called when any data-bound property of a directive changes.
//Define an anOnChanges() method to handle changes.
//(An event if there is any change in angular)
  ngOnChanges(changes : SimpleChange) : void
  {
    const currentChange : any = changes['appForbiddenName'];

    if(currentChange) {
      //const val : string or RegExp (RegularExpression)
      const val : string | RegExp = currentChange.currentValue;
      //res is going to be a type of RegExp, used to detect val type / RegExp class 'i' - ignore the case
      const res : RegExp = val instanceof RegExp ? val : new RegExp(val, 'i');

      //call the custom validator
      this._valFun = forbiddenNameValidator(res);
    } else {
      //in case of no change
      this._valFun = Validators.nullValidator;
    }
  }

  public validate(control: AbstractControl) : { [key : string] : any }
  {
    return this._valFun(control);
  }
}



