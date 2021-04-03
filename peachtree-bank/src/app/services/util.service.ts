import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  amountValidator(val : string) : ValidatorFn{
    console.log(val);
    return (control: AbstractControl): ValidationErrors | null => {
      if(parseFloat(val) < parseFloat(control.value)){
        return { 'amountValidator': true, 'requiredValue': val }
      }
      return null;
    }
  }
}
