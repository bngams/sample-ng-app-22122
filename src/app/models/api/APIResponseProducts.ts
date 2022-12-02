import { Product } from "../product";
import { APIResponse } from "./APIResponse";

export interface APIResponseProducts extends APIResponse {
  products?: Product[];
}