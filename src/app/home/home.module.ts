import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TitleComponent } from './title/title.component';
import { InputComponent } from './input/input.component';
import { AllTaskComponent } from './all-task/all-task.component';

@NgModule({
  declarations: [
    HomeComponent,
    TitleComponent,
    InputComponent,
    AllTaskComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule {}
