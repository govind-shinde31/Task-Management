import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaskComponent } from './edit-task.component';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';

describe('EditTaskComponent', () => {
  let component: EditTaskComponent;
  let fixture: ComponentFixture<EditTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTaskComponent],
      imports: [ToastrModule.forRoot(),RouterModule.forRoot([]), ReactiveFormsModule ],

    });
    fixture = TestBed.createComponent(EditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
