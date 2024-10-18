import { Component, OnInit } from '@angular/core';
import { MarchandisesComponent } from "../../components/marchandises/marchandises.component";
import { PanierService } from '../../utils/services/paniers.service';
import { Product } from '../../utils/types/product.type';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [MarchandisesComponent],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit{
  productList: Product[] = []
  constructor(private panierService: PanierService){}
  ngOnInit(): void {
    this.productList = this.panierService.product
  }

}
