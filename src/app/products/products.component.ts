import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'app/products/products.service';
import { Product } from 'app/products/products.models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public allProducts: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe((res: Product[]) => {
        this.allProducts = res;
      }, err => {
        console.log(err)
      });
  }

}
