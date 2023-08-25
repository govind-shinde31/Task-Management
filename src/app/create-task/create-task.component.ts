import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../service/task.service';
import { Router } from '@angular/router';
import { Task } from '../shared/task.model';
// import { v4 as uuidv4 } from 'uuid';

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
    dueDate: new Date(),
    completed: false,
  };

  taskForm?: FormGroup;


  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }


  submitForm() {

    this.taskService.addTask(this.newTask);


    this.router.navigate(['list']);
  }

}
