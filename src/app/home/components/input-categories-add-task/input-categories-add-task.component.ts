import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-categories-add-task',
  templateUrl: './input-categories-add-task.component.html',
  styleUrls: [ './input-categories-add-task.component.css']
})
export class InputCategoriesAddTaskComponent implements OnInit {
  @Input() category: string = "";
  @Output() categoryChange = new EventEmitter<string>();
  
  constructor() {}

  onCategoryChange(value: string) {
    this.categoryChange.emit(value); 
  }

  ngOnInit(): void {
  }

}
