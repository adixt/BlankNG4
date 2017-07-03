import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'app/products/products.service';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductsComponent],
  providers: [ProductsService],
  exports: [ProductsComponent]
})
export class ProductsModule { }
