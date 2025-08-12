import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputAddTaskComponent } from './components/input-add-task/input-add-task.component';

@NgModule({
  declarations: [
    InputAddTaskComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputAddTaskComponent
  ]
})
export class SharedModule { }
