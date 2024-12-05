import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/Category';
import { ActivatedRoute } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';
import { CategoryService } from '../../services/category.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './categories-form.component.html'
})
export class CategoriesFormComponent implements OnInit {
  category: Category;

  constructor(
    private route: ActivatedRoute,
    private sharingData: SharingDataService,
    private service: CategoryService) {
    this.category = new Category();
  }

  ngOnInit(): void {
    this.sharingData.selectCategoryEventEmitter.subscribe(category => this.category = category);

    this.route.paramMap.subscribe(params => {
      const id: number = +(params.get('id') || '0');

      if (id > 0) {
        this.service.findById(id).subscribe(category => this.category = category);
      }
    });
    console.log(this.category);
  }

  onSubmit(categoryForm: NgForm): void {
    if (categoryForm.valid) {
      this.sharingData.newCategoryEventEmitter.emit(this.category);
      console.log(this.category);
    }
    categoryForm.reset();
    categoryForm.resetForm();
  }

  onClear(categoryForm: NgForm): void {
    this.category = new Category();
    categoryForm.reset();
    categoryForm.resetForm();
  }
}
