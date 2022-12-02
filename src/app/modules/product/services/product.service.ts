import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { APIResponse } from 'src/app/models/api/APIResponse';
import { APIResponseProducts } from 'src/app/models/api/APIResponseProducts';
import { environment } from 'src/environments/environment';
import { Product } from '../../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsSubject = new Subject<Product>();

  constructor(private httpClient: HttpClient) { }

  // TODO replace any
  fetchAll(): Observable<Product[]> {
    // http
    return this.httpClient.get<any>(`${environment.apiBaseUrl}/products`).pipe(
      map(res => res.products)
    );
  }

  fetchAllWithApiResponse(numberPerPage = 10, currentPage = 1): Observable<APIResponseProducts> {
    // http
    return this.httpClient.get<APIResponseProducts>(`${environment.apiBaseUrl}/products?limit=${numberPerPage}&skip=${currentPage*numberPerPage}`);
  }
}
