import { Component, Output } from '@angular/core';
import { Task } from '../shared/task.model';
import { TaskService } from '../service/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
    this.taskService.deleteTask(taskId);
  }

  markCompleted(taskId: number, event: any): void {
    const status = event.target.checked;
    this.taskService.completeTask(taskId, status);
  }
}

