import { DatePipe, formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ptDate'
})
export class PtDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return formatDate(value, 'medium', 'en-US').split(',')[0] +','+ formatDate(value, 'medium', 'en-US').split(',')[1];
  }

}
