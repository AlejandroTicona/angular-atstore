import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/Product';
import { Store } from '../../models/Store';
import { Category } from '../../models/Category';
import { Order } from '../../models/Order';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  @Input() products: Product[] = [];

  @Input() stores: Store[] = [];

  @Input() categories: Category[] = [];

  @Input() orders: Order[] = [];
}
