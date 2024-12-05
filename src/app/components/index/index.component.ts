import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterOutlet } from '@angular/router';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';
import { SharingDataService } from '../../services/sharing-data.service';
import Swal from 'sweetalert2';
import { Store } from '../../models/Store';
import { StoreService } from '../../services/store.service';
import { Category } from '../../models/Category';
import { CategoryService } from '../../services/category.service';
import { Order } from '../../models/Order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  products: Product[] = [];

  stores: Store[] = [];

  categories: Category[] = [];

  orders: Order[] = [];

  constructor(
    private router: Router,
    private productService: ProductService,
    private storeService: StoreService,
    private categoryService: CategoryService,
    private orderService: OrderService,
    private sharingData: SharingDataService
  ) { }

  ngOnInit(): void {
    this.productService.findAll().subscribe(products => this.products = products);
    this.addProduct();
    this.removeProduct();
    this.findProductById();

    this.storeService.findAll().subscribe(stores => this.stores = stores);
    this.addStore();
    this.removeStore();
    this.findStoreById();

    this.categoryService.findAll().subscribe(categories => this.categories = categories);
    this.addCategory();
    this.removeCategory();
    this.findCategoryById();

    this.orderService.findAll().subscribe(orders => this.orders = orders);
    this.addOrder();
    this.removeOrder();
    this.findOrderById();
  }

  //PRODUCTS
  findProductById() {
    this.sharingData.findProductByIdEventEmitter.subscribe(id => {
      const product = this.products.find(product => product.id == id);
      this.sharingData.selectProductEventEmitter.emit(product);
    })
  }

  addProduct() {
    this.sharingData.newProductEventEmitter.subscribe(product => {
      if (product.id > 0) {
        this.productService.update(product).subscribe(productUpdate => {
          this.products = this.products.map(p => (p.id == productUpdate.id) ? { ...productUpdate } : p);
          this.router.navigate(['/products'], { state: { products: this.products } });
        })

      } else {
        this.productService.create(product).subscribe(productNew => {
          console.log(product)
          this.products = [... this.products, { ...productNew }];

          this.router.navigate(['/products'], { state: { products: this.products } });
        })
      }
      Swal.fire({
        title: "Guardado!",
        text: "Producto guardado con exito!",
        icon: "success"
      });
    })
  }

  removeProduct(): void {
    this.sharingData.idProductEventEmitter.subscribe(id => {
      Swal.fire({
        title: "Seguro que quiere eliminar?",
        text: "El producto sera eliminado del sistema!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
      }).then((result) => {
        if (result.isConfirmed) {

          this.productService.remove(id).subscribe(() => {
            this.products = this.products.filter(product => product.id != id);
            this.router.navigate(['/products'], { skipLocationChange: true }).then(() => {
              this.router.navigate(['/products'], { state: { products: this.products } });
            });
          })


          Swal.fire({
            title: "Eliminado!",
            text: "Producto eliminado con exito.",
            icon: "success"
          });
        }
      });
    });
  }

  //STORES
  findStoreById() {
    this.sharingData.findStoreByIdEventEmitter.subscribe(id => {
      const store = this.stores.find(store => store.id == id);
      this.sharingData.selectStoreEventEmitter.emit(store);
    })
  }

  addStore() {
    this.sharingData.newStoreEventEmitter.subscribe(store => {
      if (store.id > 0) {
        this.storeService.update(store).subscribe(storeUpdate => {
          this.stores = this.stores.map(s => (s.id == storeUpdate.id) ? { ...storeUpdate } : s);
          this.router.navigate(['/stores'], { state: { stores: this.stores } });
        })

      } else {
        this.storeService.create(store).subscribe(storeNew => {
          console.log(store)
          this.stores = [... this.stores, { ...storeNew }];

          this.router.navigate(['/stores'], { state: { stores: this.stores } });
        })
      }
      Swal.fire({
        title: "Guardado!",
        text: "Tienda guardada con exito!",
        icon: "success"
      });
    })
  }

  removeStore(): void {
    this.sharingData.idStoreEventEmitter.subscribe(id => {
      Swal.fire({
        title: "Seguro que quiere eliminar?",
        text: "La tienda sera eliminado del sistema!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
      }).then((result) => {
        if (result.isConfirmed) {

          this.storeService.remove(id).subscribe(() => {
            this.stores = this.stores.filter(store => store.id != id);
            this.router.navigate(['/stores'], { skipLocationChange: true }).then(() => {
              this.router.navigate(['/stores'], { state: { stores: this.stores } });
            });
          })
          Swal.fire({
            title: "Eliminado!",
            text: "Tienda eliminada con exito.",
            icon: "success"
          });
          
        }
      });
    });
  }
  
  //CATEGORIES
  findCategoryById() {
    this.sharingData.findCategoryByIdEventEmitter.subscribe(id => {
      const category = this.categories.find(category => category.id == id);
      this.sharingData.selectStoreEventEmitter.emit(category);
    })
  }

  addCategory() {
    this.sharingData.newCategoryEventEmitter.subscribe(category => {
      if (category.id > 0) {
        this.categoryService.update(category).subscribe(categoryUpdate => {
          this.categories = this.categories.map(c => (c.id == categoryUpdate.id) ? { ...categoryUpdate } : c);
          this.router.navigate(['/categories'], { state: { categories: this.categories } });
        })
      } else {
        this.categoryService.create(category).subscribe(categoryNew => {
          console.log(category)
          this.categories = [... this.categories, { ...categoryNew }];

          this.router.navigate(['/categories'], { state: { categories: this.categories } });
        })
      }
      Swal.fire({
        title: "Guardado!",
        text: "Categoria guardada con exito!",
        icon: "success"
      });
    })
  }

  removeCategory(): void {
    this.sharingData.idCategoryEventEmitter.subscribe(id => {
      Swal.fire({
        title: "Seguro que quiere eliminar?",
        text: "La categoria sera eliminada del sistema!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
      }).then((result) => {
        if (result.isConfirmed) {

          this.categoryService.remove(id).subscribe(() => {
            this.categories = this.categories.filter(category => category.id != id);
            this.router.navigate(['/categories'], { skipLocationChange: true }).then(() => {
              this.router.navigate(['/categories'], { state: { categories: this.categories } });
            });
          })


          Swal.fire({
            title: "Eliminado!",
            text: "Tienda eliminada con exito.",
            icon: "success"
          });
        }
      });
    });
  }

  //ORDERS

  findOrderById() {
    this.sharingData.findOrderByIdEventEmitter.subscribe(id => {
      const order = this.orders.find(order => order.id == id);
      this.sharingData.selectStoreEventEmitter.emit(order);
    })
  }

  addOrder() {
    this.sharingData.newOrderEventEmitter.subscribe(order => {
      if (order.id > 0) {
        this.orderService.update(order).subscribe(orderUpdate => {
          this.orders = this.orders.map(o => (o.id == orderUpdate.id) ? { ...orderUpdate } : o);
          this.router.navigate(['/orders'], { state: { orders: this.orders } });
        })
      } else {
        this.orderService.create(order).subscribe(orderNew => {
          console.log(order)
          this.orders = [... this.orders, { ...orderNew }];

          this.router.navigate(['/orders'], { state: { orders: this.orders } });
        })
      }
      Swal.fire({
        title: "Guardado!",
        text: "Categoria guardada con exito!",
        icon: "success"
      });
    })
  }

  removeOrder(): void {
    this.sharingData.idOrderEventEmitter.subscribe(id => {
      Swal.fire({
        title: "Seguro que quiere eliminar?",
        text: "La orden sera eliminada del sistema!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
      }).then((result) => {
        if (result.isConfirmed) {

          this.categoryService.remove(id).subscribe(() => {
            this.orders = this.orders.filter(order => order.id != id);
            this.router.navigate(['/orders'], { skipLocationChange: true }).then(() => {
              this.router.navigate(['/orders'], { state: { orders: this.orders } });
            });
          })


          Swal.fire({
            title: "Eliminado!",
            text: "Tienda eliminada con exito.",
            icon: "success"
          });
        }
      });
    });
  }
}
