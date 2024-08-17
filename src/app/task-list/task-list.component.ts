import { Component, Output } from '@angular/core';
import { Task } from '../shared/task.model';
import { TaskService } from '../service/task.service';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit} from '@fortawesome/free-solid-svg-icons';
import { BackendService } from '../shared/backend.service';



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

  constructor(private localService: TaskService,private taskService:BackendService, private router: Router) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }


  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId).subscribe((response) => {
      console.log('Task deleted successfully!');
      this.tasks = this.tasks.filter(t => t.id !== taskId);
      this.taskService.showSuccess("Deleted Succesfully", "")
    })
    // this.tasks = this.tasks.filter(t => t.id !== taskId);
    // this.localService.deleteTask(taskId);
    // this.localService.showSuccess("Deleted Succesfully", "Task Management")
  }

  markCompleted(taskId: number, event: any): void {
    const status = event.target.checked;
    this.localService.completeTask(taskId, status);
  }
}

