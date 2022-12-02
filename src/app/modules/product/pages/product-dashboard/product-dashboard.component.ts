import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  @ViewChild(ProductListComponent)
  productListComponent!: ProductListComponent;

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(p: Product): void {
    console.log(p);
    this.productListComponent.products.push(p);
  }

}
