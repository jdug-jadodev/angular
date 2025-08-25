import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-all-task',
  templateUrl: './all-task.component.html',
  styleUrls: ['./all-task.component.css']
})

export class AllTaskComponent implements OnInit {
  tasks$ = combineLatest([
    this.taskService.tasks$,
    this.categoryService.selectedCategory$
  ]).pipe(
    map(([tasks, category]) =>
      category ? tasks.filter(t => t.category === category) : tasks
    )
  );

  constructor(
    private taskService: TaskService,
    private categoryService: CategoryService
  ) {}


  showAllTasks() {
    this.categoryService.selectCategory(null);
  }
  
  ngOnInit(): void {
  }

  trackById = (_: number, t: { id: number }) => t.id;

}
