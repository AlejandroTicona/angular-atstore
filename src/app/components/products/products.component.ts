import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/Product';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {


  title: string = 'Listado de productos';

  @Input() products: Product[] = [];

  @Output() idProductEventEmitter = new EventEmitter();

  @Output() selectedProductEventEmitter = new EventEmitter();

  constructor(
    private service: ProductService,
    private sharingData: SharingDataService,
    private router: Router) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.products = this.router.getCurrentNavigation()?.extras.state!['products'];
    }
  }

  ngOnInit(): void {
    if (this.products == undefined || this.products == null || this.products.length == 0) {
      console.log("Consulta findAll");
      this.service.findAll().subscribe(products => this.products = products);
    }
  }


  onRemoveProduct(id: number): void {
    this.sharingData.idProductEventEmitter.emit(id);
  }
  onSelectedProduct(product: Product): void {
    this.router.navigate(['/products/edit', product.id]);
  }


}
