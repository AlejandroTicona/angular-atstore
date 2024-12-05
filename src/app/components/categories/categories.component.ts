import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../models/Category';
import { CategoryService } from '../../services/category.service';
import { SharingDataService } from '../../services/sharing-data.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './categories.component.html'
})
export class CategoriesComponent {
  @Input() categories: Category[] = [];

  @Output() idCategoryEventEmitter = new EventEmitter();

  @Output() selectedCategoryEventEmitter = new EventEmitter();

  constructor(
    private service: CategoryService,
    private sharingData: SharingDataService,
    private router: Router
  ) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.categories = this.router.getCurrentNavigation()?.extras.state!['categories'];
    }
  }

  ngOnInit(): void {
    if (this.categories == undefined || this.categories == null || this.categories.length == 0) {
      console.log("Consulta findAll");
      this.service.findAll().subscribe(categories => this.categories = categories);
    }
  }

  onRemoveCategory(id: number): void {
    this.sharingData.idCategoryEventEmitter.emit(id);
  }
  onSelectedCategory(category: Category): void {
    this.router.navigate(['/categories/edit', category.id]);
  }
}
