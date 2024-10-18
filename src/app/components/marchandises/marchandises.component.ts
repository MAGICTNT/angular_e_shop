import { Component, Input, input } from '@angular/core';
import { Product } from '../../utils/types/product.type';
import { ProductService } from '../../utils/services/products.service';
import { PanierService } from '../../utils/services/paniers.service';

@Component({
  selector: 'app-marchandises',
  standalone: true,
  imports: [],
  templateUrl: './marchandises.component.html',
  styleUrl: './marchandises.component.css'
})
export class MarchandisesComponent {
  @Input() product!: Product
  @Input() panier!: boolean
  @Input() id!: number
  constructor(private panierService: PanierService){}
  addIntoPanier(product:Product):void{
    this.panierService.addPanier(product)
  }
  rmvIntoPanier(product:number):void{
    this.panierService.rmvPanier(product)
  }
}
