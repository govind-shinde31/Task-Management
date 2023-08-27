import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListComponent],
      imports: [ToastrModule.forRoot(),RouterModule.forRoot([])],
    });
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
