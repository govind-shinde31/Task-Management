import { Component, Input } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Router } from '@angular/router';
import { Task } from '../shared/task.model';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  newTask: Task = {
    id: 0,
    title: '',
    description: '',
    dueDate: undefined,
    completed: false,
  };



  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }


  submitForm() {

    this.taskService.addTask(this.newTask);

    this.taskService.showSuccess("Task Created", "Create")
    setTimeout(() => {
      this.router.navigate(['list']);
      
    }, 1000);
  }


}
