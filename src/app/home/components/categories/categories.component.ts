import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {
  categories$: Observable<string[]>;

  constructor(private categoryService: CategoryService) {
    this.categories$ = this.categoryService.categories$;
  }
  ngOnInit(): void {  }

  onCategorySelected(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.categoryService.selectCategory(value || null);
  }
  selectAllTasks() {
    this.categoryService.selectCategory(null); // resetea el filtro
  }
}
