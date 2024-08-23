import { Component, Input } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Router } from '@angular/router';
import { Task } from '../shared/task.model';
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../shared/backend.service';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  faCalender = faCalendar;

  // The commented code is used for local storage


  taskForm = new FormGroup({
    id: new FormControl(Date.now()),
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    dueDate: new FormControl(new Date(), Validators.required),
  });



  constructor(
    private localService: TaskService,
    private router: Router,
    private taskService: BackendService
  ) { }

  ngOnInit(): void {

  }

  // onSubmit(): void {

  //   this.localService.addTask(this.taskForm.value as Task);

  //   this.localService.showSuccess("Task Created", "Task Management")
  //   setTimeout(() => {
  //     this.router.navigate(['task-list']);
  //   }, 1000);
  // }


  onSubmit(): void {
    this.taskService.createTask(this.taskForm.value as Task).subscribe((response) => {
      console.log('Task created successfully!');
    }, (error) => {
      console.error('Error creating task:', error);
    });
    this.taskService.showSuccess("Task Created", "Task Management")
    setTimeout(() => {
      this.router.navigate(['task-list']);

    }, 1000);
  }

  get dueDate() {
    return this.taskForm.get('dueDate')?.value;
  }
}
