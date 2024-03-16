import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitlize',
  standalone: true
})
export class CapitlizePipe implements PipeTransform {

  transform(value: string): string {
  if (!value) return value;
  return value.charAt(0).toUpperCase()+value.slice(1,value.length);
  }
}
