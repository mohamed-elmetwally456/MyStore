import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CapitlizePipe } from '../../pipes/capitlize.pipe';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe,CapitlizePipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
product!:IProduct|undefined;
IsLastIndex:boolean=false;
IsFirstIndex:boolean=false;

constructor(
  private productservices:ProductService,
  private router :Router,
  private activatedroute :ActivatedRoute
){}
GoNext(id:number){
  let nextID = this.productservices.GoToNextProduct(id);
  this.router.navigate(["/product",nextID]);
}
GoBack(id:number){
  let PrevID = this.productservices.GoToPrevProduct(id);
  this.router.navigate(["/product",PrevID]);
}

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param)=>{
    const paramId = param.get("id");
    const id =paramId? +paramId:undefined;
    this.product=this.productservices.GetProductByID(id);
    this.IsFirstIndex =this.productservices.IsFirstindex(id);
    this.IsLastIndex =this.productservices.Islastindex(id);
  });
  }
}
