import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    const capital = value[0].toUpperCase();
    return capital + value.substring(1);
  }
}
