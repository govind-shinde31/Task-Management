import { Component, Output } from '@angular/core';
import { Task } from '../shared/task.model';
import { TaskService } from '../service/task.service';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: Task[] = [];
  faCoffee = faCoffee;
  faTrash = faTrash;
  faEdit = faEdit;

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
    this.taskService.showSuccess("Deleted Succesfully", "Task Management")
  }

  markCompleted(taskId: number, event: any): void {
    const status = event.target.checked;
    this.taskService.completeTask(taskId, status);
  }
}

