import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-input-add-task',
  templateUrl: './input-add-task.component.html',
  styleUrls: ['./input-add-task.component.css']
})
export class InputAddTaskComponent implements OnInit {
  taskName: string = "";
  category: string = "";


  constructor(
    private taskService: TaskService,
    private categoryService: CategoryService

  ) {}

  ngOnInit(): void {}

  onCategorySelected(category: string) {
    this.category = category;
  }

  addTask() {
    if(!this.taskName || !this.category) return

    this.taskService.addTask({
      name: this.taskName,
      category: this.category
    });

    this.categoryService.addCategory(this.category)

    this.taskName = "";
    this.category = "";
  }
}
