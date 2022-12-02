import { APIResponseProducts } from "src/app/models/api/APIResponseProducts";
import { Product } from "../../../models/product";

export const PRODUCTS_MOCK: Product[] = [
  { title: 'Produit1', price: 10, description: '1'},
  { title: 'Produit2', price: 20, description: '2'},
  { title: 'Produit3', price: 30, description: '3'},
]

export const API_RESPONSE_PRODDUCTS_MOCK: APIResponseProducts = {
  total: 3,
  limit: 10,
  skip: 0,
  products: PRODUCTS_MOCK
}