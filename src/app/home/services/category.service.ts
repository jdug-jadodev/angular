import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  private categoriesSubject = new BehaviorSubject<string[]>([]);
  categories$ = this.categoriesSubject.asObservable();

  private selectedCategorySubject = new BehaviorSubject<string | null>(null);
  selectedCategory$ = this.selectedCategorySubject.asObservable();

  constructor() { }

  addCategory(name: string): void {
    const categories = this.categoriesSubject.value;
    if (!categories.includes(name)) {
      this.categoriesSubject.next([...categories, name]);
    }
  }

  getCategories(): string[] {
    return this.categoriesSubject.value;
  }

  selectCategory(category: string | null) {
    this.selectedCategorySubject.next(category);
  }
}