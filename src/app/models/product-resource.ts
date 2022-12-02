import { Resource } from "../utils/api/resource";

// export interface Product {
export interface ProductResource extends Resource<number> {
  title: string;
  price: number;
  description?: string;
  thumbnail?: string;
}
