import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAmount]'
})
export class AmountDirective {
/**
 * Format the amount on input
 *
 * @param {*} event
 * @memberof AmountDirective
 */
@HostListener('input', ['$event']) onInputChange(event) {
    let initalValue: string = this.el.nativeElement.value;
    if (initalValue) {
      initalValue = initalValue.replace(/[^\.|0-9]/g, '');
      const count = (initalValue.match(/\./g) || []).length;
      for (let i = 1; i < count; i++) {
        initalValue = this.repaceSecondDotOccurrence(initalValue);
      }
      if (event.inputType === 'deleteContentBackward') {
        this.el.nativeElement.value = initalValue;
      } else {
        this.el.nativeElement.value = this.twoDecimalPoint(initalValue);
      }
    }
  }

  /**
   * Format amount to 2 demial places
   *
   * @memberof AmountDirective
   */
  @HostListener('blur')
  setInputFocusOut(): void {
    const initalValue: string = this.el.nativeElement.value;
    if (initalValue) {
      this.el.nativeElement.value = parseFloat(initalValue).toFixed(2);
    }
  }

  /**
   * Remove second decimal value
   *
   * @param {*} inputString
   * @return {*}  {string}
   * @memberof AmountDirective
   */
  repaceSecondDotOccurrence(inputString): string {
    let t = 0;
    return inputString.replace(/\./g, (match) => {
      t++;
      return (t === 2) ? '' : match;
    });
  }

  /**
   * Format amount on input to two decimal places
   *
   * @param {*} inputString
   * @return {*} 
   * @memberof AmountDirective
   */
  twoDecimalPoint(inputString) {
    if (inputString.split('.')[1]) {
      return parseFloat(inputString).toFixed(2);
    } else {
      return inputString;
    }
  }

  constructor(private el: ElementRef) { }

}
