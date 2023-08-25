import { Component, Output } from '@angular/core';
import { Task } from '../shared/task.model';
import { TaskService } from '../service/task.service';
import { Router } from '@angular/router';
import { DescriptionComponent } from '../description/description.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: Task[] = [];
 selectedTask: Task | null = null;

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.getTask();
  }
  getTask(){
    this.tasks = this.taskService.getTasks();
  }



  showDescription(task: Task): void {
    this.selectedTask = task;
    console.log(task);
  }

  edit(data:number){
   let getDetails = data;
    // this.router.navigate(['create-task', data]);
     alert(getDetails)
  }
  deleteTask(task: Task): void {
    this.taskService.deleteTask(task)
    console.log(task)
    }

    completeTask(taskId: number): void {
      this.taskService.completeTask(taskId);
      this.getTask();
    }
  }

