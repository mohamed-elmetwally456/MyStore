import { Component, Input } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import productlist from '../../../assets/ProductList';
import { HightlightDirective } from '../../Directive/hightlight.directive';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { SingleProductComponent } from '../single-product/single-product.component';
import { CapitlizePipe } from '../../pipes/capitlize.pipe';
import { HighlightIPipe } from '../../pipes/highlight-i.pipe';




@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HightlightDirective,CurrencyPipe,DatePipe,CapitlizePipe,SingleProductComponent,HighlightIPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
productsCart: IProduct[] = [];
products:IProduct[] =productlist;
handlbuy(product:IProduct){
  product.quantity--;
}
addToCart(newCartItem: IProduct) {
  this.productsCart.push(newCartItem);

}
@Input() filterValue: string = '';
ngOnChanges(): void {
  if (this.filterValue == '') {
    this.products = productlist;
  } else {
    this.products = this.products.filter((product) =>
      product.name.includes(this.filterValue)
    );
  }
}
}
