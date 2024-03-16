import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightI',
  standalone:true,
})
export class HighlightIPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    return value.replace(/i/g, '<span class="highlight-i">i</span>');
  }
}

