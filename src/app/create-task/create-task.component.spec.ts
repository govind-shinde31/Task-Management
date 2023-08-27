import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTaskComponent } from './create-task.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CreateTaskComponent', () => {
  let component: CreateTaskComponent;
  let fixture: ComponentFixture<CreateTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTaskComponent],
      imports: [ToastrModule.forRoot(),RouterModule.forRoot([]), ReactiveFormsModule, FormsModule  ],
    });
    fixture = TestBed.createComponent(CreateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
