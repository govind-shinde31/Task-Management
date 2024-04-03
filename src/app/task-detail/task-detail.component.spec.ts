import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailComponent } from './task-detail.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

describe('TaskDetailComponent', () => {
  let component: TaskDetailComponent;
  let fixture: ComponentFixture<TaskDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskDetailComponent],
      imports: [ToastrModule.forRoot(),RouterModule.forRoot([])],
      
    });
    fixture = TestBed.createComponent(TaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
