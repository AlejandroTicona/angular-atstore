import { DetailsOrder } from "./DetailsOrder";
import { Store } from "./Store";

export interface Order {
  id: number; 
  store: Store; 
  name: string; 
  date: Date; 
  shippingAddress: string; 
  idDelivery: boolean; 
  detailsOrders: DetailsOrder[];
  }
  