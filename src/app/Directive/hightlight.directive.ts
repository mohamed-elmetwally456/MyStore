import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges, } from '@angular/core';
@Directive({
  selector: '[appHightlight]',
  standalone: true
})
export class HightlightDirective implements OnChanges{
@Input() color: string="";
@Input() quantity: number=0;

constructor(private elementref:ElementRef,private rendere:Renderer2) {
  elementref.nativeElement.style.border = '2px solid black';
 }

ngOnChanges(changes: SimpleChanges): void {
  if (changes['quantity'] && changes['quantity'].currentValue === 0) {
    this.rendere.setStyle(this.elementref.nativeElement, 'opacity', 0.5);
  }
  if(changes['color'])
  this.elementref.nativeElement.style.backgroundColor= changes['color'].currentValue;;
}

   @HostListener('mouseover') onmouseover(){
    this.rendere.setStyle(this.elementref.nativeElement,"box-shadow","15px 15px 5px lightblue")
   }

   @HostListener('mouseout') onmouseout(){
    this.rendere.setStyle(this.elementref.nativeElement,"box-shadow","")
   }
}
