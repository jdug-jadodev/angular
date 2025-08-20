import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCategoriesAddTaskComponent } from './input-categories-add-task.component';

describe('InputCategoriesAddTaskComponent', () => {
  let component: InputCategoriesAddTaskComponent;
  let fixture: ComponentFixture<InputCategoriesAddTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCategoriesAddTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCategoriesAddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
