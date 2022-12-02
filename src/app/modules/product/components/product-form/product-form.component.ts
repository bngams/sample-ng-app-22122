import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Output()
  newProduct: EventEmitter<Product> = new EventEmitter();

  productForm!: FormGroup;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.productForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl('', [Validators.required])
    });
  }

  submit(): void {
    console.log(this.productForm.value);
    this.newProduct.emit(this.productForm.value);
    this.productService.productsSubject.next(this.productForm.value);
  }

}
