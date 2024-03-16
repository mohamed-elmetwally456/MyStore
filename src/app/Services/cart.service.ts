import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cartitem:IProduct[]=[];
  constructor() { }

GetCartItem(){
  return this.cartitem;
}
AddToCart(product:IProduct){
  this.cartitem.push(product);
}
RemoveFormCart(id:number){
  this.cartitem.filter((cartitem)=>cartitem.id != id);
}
}
