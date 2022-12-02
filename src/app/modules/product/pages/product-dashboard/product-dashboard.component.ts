import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit, AfterViewInit {
  @ViewChild(ProductListComponent)
  productListComponent!: ProductListComponent;

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit ViewChild', this.productListComponent);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit ViewChild', this.productListComponent);
  }

  addProduct(p: Product): void {
    console.log(p);
    this.productListComponent.products.push(p);
  }

}
