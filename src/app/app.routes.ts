import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { OrdersComponent } from './components/orders/orders.component';
import { StoresComponent } from './components/stores/stores.component';
import { StoresFormComponent } from './components/stores-form/stores-form.component';
import { CategoriesFormComponent } from './components/categories-form/categories-form.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';

export const routes: Routes = [

    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'products', component: ProductsComponent },
    { path: 'products/create', component: ProductsFormComponent },
    { path: 'products/edit/:id', component: ProductsFormComponent },
    { path: 'orders', component: OrdersComponent },
    // { path: 'orders/create', component: OrdersFormComponent },
    // { path: 'orders/edit', component: OrdersFormComponent },
    { path: 'stores', component: StoresComponent },
    { path: 'stores/create', component: StoresFormComponent },
    { path: 'stores/edit/:id', component: StoresFormComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'categories/create', component: CategoriesFormComponent },
    { path: 'categories/edit/:id', component: CategoriesFormComponent },
];
