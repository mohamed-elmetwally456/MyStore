import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { HightlightDirective } from '../../Directive/hightlight.directive';
import { HighlightIPipe } from '../../pipes/highlight-i.pipe';
import { CapitlizePipe } from '../../pipes/capitlize.pipe';
import { CartService } from '../../Services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [
    CapitlizePipe,
    HightlightDirective,
    CurrencyPipe,
    DatePipe,
    HighlightIPipe
  ],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css',
})
export class SingleProductComponent {
  @Input() product!: IProduct;
  @Input() isChair!: boolean;
  @Input() searchValue: string = '';
  @Output() handleAddToCart = new EventEmitter<IProduct>();
  constructor(private cartservices:CartService,private router :Router){}
  currentDate: Date = new Date();
  addProductToCart(event :MouseEvent , product: IProduct) {
    event.stopPropagation();
    this.cartservices.AddToCart(product);
    product.quantity--;
  }
  handelroute(id:number){
    this.router.navigate(["/product",id]);
  }
}
