import { Component } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { CartService } from '../../Services/cart.service';
import { CapitlizePipe } from '../../pipes/capitlize.pipe';
import { CurrencyPipe } from '@angular/common';
import productlist from '../../../assets/ProductList';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CapitlizePipe,CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  product:IProduct[]=productlist;
productsCart:IProduct[]=[]
constructor(private cartservices:CartService){
  this.productsCart=this.cartservices.GetCartItem();
}
}
