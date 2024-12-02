import { Routes } from '@angular/router';
import { StoresComponent } from './components/stores/stores.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { OrdersComponent } from './components/orders/orders.component';
import { DetailsOrdersComponent } from './components/details-orders/details-orders.component';

export const routes: Routes = [
    { 
        path: 'stores', 
        component: StoresComponent
    },
    { 
        path: 'products', 
        component: ProductsComponent
    },
    { 
        path: 'categories', 
        component: CategoriesComponent
    },
    { 
        path: 'orders', 
        component: OrdersComponent
    },
    { 
        path: 'details-orders', 
        component: DetailsOrdersComponent
    },
    { 
        path: '', 
        redirectTo: '/stores', 
        pathMatch: 'full' 
    },
    { 
        path: '**', 
        redirectTo: '/stores' 
    },
];
