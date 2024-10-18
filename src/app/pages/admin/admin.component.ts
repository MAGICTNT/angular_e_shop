import { Component, OnInit } from '@angular/core';
import { Product } from '../../utils/types/product.type';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../utils/services/products.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  productList: Product[] = []
  constructor(private productService: ProductService){}
  
  ngOnInit(): void {
    this.productList = this.productService.product
  }

  add_product: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    genre: new FormControl('', [Validators.required])
  })

  save_product():void{
    if(this.add_product.valid){
      this.productService.addProduct(this.add_product.value)
    }
  }

  removeProduct(index:number):void{
    this.productList.splice(index,1);
  }
}
