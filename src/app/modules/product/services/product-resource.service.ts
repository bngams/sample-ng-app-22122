import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductResource } from "src/app/models/product-resource";
import { ResourceService } from "src/app/utils/api/resources.service";

@Injectable({
  providedIn: 'root'
})
export class ProductResourceService extends ResourceService<number, ProductResource> {

  constructor(private http: HttpClient) {
    super(http, `products`);
  }
}
