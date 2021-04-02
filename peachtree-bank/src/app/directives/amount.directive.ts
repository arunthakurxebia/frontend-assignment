import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ptAmount]'
})
export class AmountDirective {

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if ( initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
  constructor(private el: ElementRef) { }

}
