import { Injectable } from '@angular/core';
import { CategoryService } from './category.service';
import { Task } from '../models/task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks)

  tasks$ = this.tasksSubject.asObservable()
  private nextId = 1;

  getTask(): Task[] {
    return this.tasks;
  }

  addTask(task: Omit<Task, 'id'>): void {
    const newTask: Task= { ...task, id: this.nextId++}
    this.tasks.push(newTask);
    this.tasksSubject.next(this.tasks);   
  }
}