import { Component, Input } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Router } from '@angular/router';
import { Task } from '../shared/task.model';
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  faCalender = faCalendar;


  taskForm = new FormGroup({
    id: new FormControl(Date.now()),
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    dueDate: new FormControl('', Validators.required),
  });



  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {

    this.taskService.addTask(this.taskForm.value as Task);

    this.taskService.showSuccess("Task Created", "Task Management")
    setTimeout(() => {
      this.router.navigate(['list']);

    }, 1000);

  }


}
