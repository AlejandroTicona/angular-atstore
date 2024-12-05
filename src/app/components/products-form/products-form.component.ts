import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SharingDataService } from '../../services/sharing-data.service';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/Product';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/Category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './products-form.component.html'
})
export class ProductsFormComponent implements OnInit {
  product: Product;
  categories: Category[] = [];

  constructor(
    private route: ActivatedRoute,
    private sharingData: SharingDataService,
    private service: ProductService,
    private categoryService: CategoryService,
  ) {
    this.product = new Product();
  }
  ngOnInit(): void {
    this.sharingData.selectProductEventEmitter.subscribe(product => this.product = product);

    this.route.paramMap.subscribe(params => {
      const id: number = + (params.get('id') || '0');
      if (id > 0) {
        this.service.findById(id).subscribe(product => this.product = product);
      }
    });
    this.categoryService.findAll().subscribe((categories) => {
      this.categories = categories;
    });
    console.log(this.product);

  }

  onSubmit(productForm: NgForm): void {
    if (productForm.valid) {
      this.sharingData.newProductEventEmitter.emit(this.product);
      console.log(this.product);
    }
    productForm.reset();
    productForm.resetForm();
  }

  onClear(productForm: NgForm): void {
    this.product = new Product();
    productForm.reset();
    productForm.resetForm();
  }
}
