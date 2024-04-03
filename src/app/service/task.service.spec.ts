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

  it('should add new task', () => {
    const t = {
      id: 1,
      title: 'title',
      completed: true,
      description: 'description',
    };

    service.addTask(t);
    const tasks = service.getTasks();

    const hasNewTask = tasks.some(c => c.id === t.id);
    expect(hasNewTask).toBe(true);
  });

  it('should remove task', () => {
    const t = {
      id: 2,
      title: 'title',
      completed: true,
      description: 'description',
    };

    service.addTask(t);

    service.deleteTask(t.id);

    const tasks = service.getTasks();

    const hasNewTask = tasks.some(c => c.id === t.id);
    expect(hasNewTask).toBe(false);
  });

  it('should update task', () => {
    const t = {
      id: 3,
      title: 'title',
      completed: true,
      description: 'description',
    };

    service.addTask(t);

    const updatedTask = {
      id: 3,
      title: 'title-updated',
      completed: true,
      description: 'description',
    };

    service.updateTask(updatedTask);
    
    const tasks = service.getTasks();
    const task = tasks.find(c => c.id === t.id);
    expect(task?.title).toBe('title-updated');
  });
});
