import { Component, Input } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Router } from '@angular/router';
import { Task } from '../shared/task.model';
import {faCalendar} from '@fortawesome/free-solid-svg-icons'
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  faCalender = faCalendar;
  dueDate?: undefined;
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

    this.newTask.id = Date.now(); // Generate a unique id (timestamp-based)
    this.taskService.addTask(this.newTask);

    this.taskService.showSuccess("Task Created", "Task Management")
    setTimeout(() => {
      this.router.navigate(['list']);
      
    }, 1000);
  }


}
