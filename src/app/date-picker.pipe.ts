import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePicker'
})
export class DatePickerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
