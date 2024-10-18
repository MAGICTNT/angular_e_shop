import { Injectable } from "@angular/core"
import { Product } from "../types/product.type"

@Injectable({
    providedIn: 'root'
  })
  export class PanierService {
      product: Product[] = []
    constructor() {
        const stored = localStorage.getItem('panier')
        if(stored){
          this.product = JSON.parse(stored)
        }
     }
  
     addPanier(product: Product): void{
      this.product.push(product)
      localStorage.setItem('panier', JSON.stringify(this.product))
     }

     rmvPanier(product: number):void{
        this.product.splice(product,1)

        localStorage.setItem('panier', JSON.stringify(this.product))
     }
  }
  