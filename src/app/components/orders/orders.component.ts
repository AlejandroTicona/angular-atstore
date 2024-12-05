import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from '../../models/Order';
import { OrderService } from '../../services/order.service';
import { SharingDataService } from '../../services/sharing-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {
  @Input() orders: Order[] = [];

  @Output() idOrderEventEmitter = new EventEmitter();

  @Output() selectProductEventEmitter = new EventEmitter();

  constructor(
    private service: OrderService,
    private sharingData: SharingDataService,
    private router: Router
  ) {
    if (this.router == undefined || this.orders == null || this.orders.length == 0) {
      console.log("Consulta findAll")
      this.service.findAll().subscribe(orders => this.orders = orders);
    }
  }
  ngOnInit(): void {

    if (this.orders == undefined || this.orders == null || this.orders.length == 0) {
      console.log("Consulta findAll");
      this.service.findAll().subscribe(orders => this.orders = orders);
    }
  }

  onRemoveOrder(id: number): void {
    this.sharingData.idProductEventEmitter.emit(id);
  }

  onSelectedOrder(order: Order): void {
    this.router.navigate(['/orders/edit', order.id]);

  }

  formatDate(date: Date): string {
    if (!date) return ''; // Asegurarse de que no sea null o undefined

    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
}
