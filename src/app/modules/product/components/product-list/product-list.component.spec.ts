import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../../services/product.service';
import { API_RESPONSE_PRODDUCTS_MOCK } from '../../mocks/product.mock';
import { of } from 'rxjs';

describe('ProductListComponent', () => {
  let appCompomentFixture: ComponentFixture<ProductListComponent>;
  let productListComponent: ProductListComponent;

  const spyProductService = jasmine.createSpyObj('ProductService', ['fetchAll', 'fetchAllWithApiResponse']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, 
        HttpClientTestingModule
      ],
      declarations: [
        ProductListComponent
      ],
      providers: [
        {
          provide: ProductService,
          useValue: spyProductService
        }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
    appCompomentFixture = TestBed.createComponent(ProductListComponent);
    productListComponent = appCompomentFixture.componentInstance;
  });

  it('should create the component', () => {
    const app = productListComponent;
    expect(app).toBeTruthy();
  });

  it('should load products and calculate pagination', () => {
    const app = productListComponent;
    // mock - intercept fetchAllWithApiResponse
    spyProductService.fetchAllWithApiResponse.and.returnValue(of(API_RESPONSE_PRODDUCTS_MOCK));
    app.loadProductsWithHttp(); // <= pagination is calculated here according to result
    // check paginate calculation
    expect(app.numberOfPages).toEqual(0.3);
  });

});
