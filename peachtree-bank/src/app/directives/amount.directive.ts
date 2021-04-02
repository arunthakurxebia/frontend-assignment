import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ptAmount]'
})
export class AmountDirective {

  @HostListener('input', ['$event']) onInputChange(event) {
    let initalValue: string = this.el.nativeElement.value;
    initalValue = initalValue.replace(/[^\.|0-9]/g, '');
    const count = (initalValue.match(/\./g) || []).length;
    for (let i = 1; i < count; i++) {
      initalValue = this.repaceSecondDotOccurrence(initalValue);
    }
    if(event.inputType == 'deleteContentBackward'){
      this.el.nativeElement.value = initalValue;
    }else{
      this.el.nativeElement.value = this.twoDecimalPoint(initalValue);
    }
  }

  @HostListener("blur")
    setInputFocusOut(): void {
      let initalValue: string = this.el.nativeElement.value;
      this.el.nativeElement.value = parseFloat(initalValue).toFixed(2);
    }

  repaceSecondDotOccurrence(inputString): string {
    let t = 0;
    return inputString.replace(/\./g, function (match) {
      t++;
      return (t === 2) ? '' : match;
    });
  }
  twoDecimalPoint(inputString){
    if(inputString.split('.')[1])
    {
      return parseFloat(inputString).toFixed(2);
    }else{
      return inputString;
    }
  }
  
  constructor(private el: ElementRef) { }

}
