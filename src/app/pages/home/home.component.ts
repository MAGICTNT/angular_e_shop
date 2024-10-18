import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../utils/services/products.service';
import { Product } from '../../utils/types/product.type';
import { MarchandisesComponent } from "../../components/marchandises/marchandises.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MarchandisesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  productList: Product[] = []
  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.productList = this.productService.product
  }
}
