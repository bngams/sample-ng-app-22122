import { Component, OnInit } from '@angular/core';
import { map, Observable, Observer, of } from 'rxjs';
import { PRODUCTS_MOCK } from '../../mocks/product.mock';
import { Product } from '../../../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  products$!: Observable<Product[]>;
  numberPerPage = 5;
  numberOfPages! :number;
  currentPage = 1;
  pages: number[] = [];

  // only for DI
  constructor(private productService: ProductService) { 
    // Rather in ngOnInit();
    // this.loadProductsWithDummyData();
  }

  // init after ngOnChanges()
  ngOnInit(): void {
    // this.loadProductsWithDummyData();
    // this.testObservable();
    this.loadProductsWithHttp(this.numberPerPage, 1);
    // this.loadProducts$();
    this.subscribeToProductsSubject();
  }

  testObservable() {
    const observable: Observable<number> = of(1,2,3);
    const observer: Observer<number> = {
      next: (n) => console.log(n),
      error: (e) => console.log(e),
      complete: () => console.log('complete')
    }
    const observerPartial: Partial<Observer<number>> = {
      next: (n) => console.log(n),
    }
    observable.subscribe(observerPartial)

    of(1,2,3)
      .pipe(
        map(x => x * 10)
      )
      .subscribe((n) => console.log(n));
  }

  loadProductsWithDummyData() {
    this.products = PRODUCTS_MOCK;
  }

  loadProductsWithHttp(numberPerPage = 10, currentPage = 1) {
    this.productService.fetchAllWithApiResponse(numberPerPage, currentPage).subscribe(
      (data) => { 
        this.products = data.products || [];
        this.numberOfPages = data.total / numberPerPage;
        console.log(data.total, numberPerPage, this.numberOfPages);
        this.pages = [];
        for(let i = 1; i < this.numberOfPages; i++) {
          this.pages.push(i);
        }
        console.log(this.pages);
      }
    );
  }

  loadProducts$() {
    this.products$ = this.productService.fetchAll();
  }

  subscribeToProductsSubject(): void {
    this.productService.productsSubject.subscribe(
      data => {
        console.log('data from subject', data);
        this.products.push(data);
      }
    );
  }

}
