import { Injectable } from '@angular/core';
import productlist from '../../assets/ProductList';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products: IProduct[];
  constructor() {
    this._products = productlist;
  }
  GetAllProducts():IProduct[]{
    return this._products;
  }
  GetProductByID(id:number|undefined):IProduct|undefined{
    if(!id)return undefined;
    let product = this._products.find(p=>p.id==id);
    if(product) return product ;
    return ;
  }
GetProductsByCategoryID(categoryID :number):IProduct[]
{
return this._products.filter(p=>p.category==categoryID);
}
Islastindex(id:number|undefined){
let product =this._products[this._products.length-1]
return product.id==id;
}
IsFirstindex(id:number|undefined){
  let product =this._products[0]
  return product.id==id;
  }
GoToNextProduct(id:number):number{
let currentindex = this._products.findIndex(p=>p.id==id);
let nextindex = this._products[++currentindex];
return nextindex.id;
}
GoToPrevProduct(id:number):number{
  let currentindex = this._products.findIndex(p=>p.id==id);
  let previndex = this._products[--currentindex];
  return previndex.id;
  }
}
