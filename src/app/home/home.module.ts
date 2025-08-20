import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TitleComponent } from './title/title.component';
import { AllTaskComponent } from './all-task/all-task.component';
import { CategoriesComponent } from './categories/categories.component';
import { InputCategoriesAddTaskComponent } from './input-categories-add-task/input-categories-add-task.component';
import { InputAddTaskComponent } from './input-add-task/input-add-task.component';

@NgModule({
  declarations: [
    HomeComponent,
    TitleComponent,
    AllTaskComponent,
    CategoriesComponent,
    InputAddTaskComponent,
    InputCategoriesAddTaskComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule {}
