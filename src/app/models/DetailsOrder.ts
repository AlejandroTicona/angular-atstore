import { Product } from "./Product";

export interface DetailsOrder {
    id: number; 
    product: Product; 
    quantity: number;
}