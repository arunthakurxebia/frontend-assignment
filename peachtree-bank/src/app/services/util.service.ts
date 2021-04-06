import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private _loading: boolean = false;

  constructor() { }

  amountValidator(val: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if ((parseFloat(val) + 500) < parseFloat(control.value)) {
        return { amountValidator: true, requiredValue: val };
      }
      return null;
    };
  }

  getloading(): boolean {
      return this._loading;
  }

  onRequestStarted(): void {
      this._loading = true;
  }

  onRequestFinished(): void {
      this._loading = false;
  }
}
