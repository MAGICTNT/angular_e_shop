import { Injectable } from '@angular/core';
import { Product } from '../types/product.type';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
    product: Product[] = []
  constructor() {
      const stored = localStorage.getItem('products')
      if(stored){
        this.product = JSON.parse(stored)
      }
   }

   addProduct(product: Product): void{
    this.product.push(product)
    localStorage.setItem('products', JSON.stringify(this.product))
   }
}
