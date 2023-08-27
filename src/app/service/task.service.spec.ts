import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';
import { ToastrModule } from 'ngx-toastr';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],

    })
      .compileComponents();
      service = TestBed.inject(TaskService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
