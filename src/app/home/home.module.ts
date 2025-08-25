import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TitleComponent } from './components/title/title.component';
import { AllTaskComponent } from './components/all-task/all-task.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { InputCategoriesAddTaskComponent } from './components/input-categories-add-task/input-categories-add-task.component';
import { InputAddTaskComponent } from './components/input-add-task/input-add-task.component';
import { FormsModule } from '@angular/forms';
import { TaskItemComponent } from './components/task-item/task-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    TitleComponent,
    AllTaskComponent,
    CategoriesComponent,
    InputAddTaskComponent,
    InputCategoriesAddTaskComponent,
    TaskItemComponent,
  ],
  imports: [
    FormsModule, 
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule {}