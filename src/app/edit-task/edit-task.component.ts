import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../service/task.service';
import { Task } from '../shared/task.model';
import {faCalendar} from '@fortawesome/free-solid-svg-icons'
import { BackendService } from '../shared/backend.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  faCalender = faCalendar;
  id!: string
  task: any;
  
  constructor(
    private route: ActivatedRoute,
    private localService: TaskService,
    private taskService: BackendService,
    private router: Router) {
  }

  // The commented code is used for local storage

  ngOnInit(): void {
    
    // this.id = this.route.snapshot.paramMap.get('id') ?? ''
    // this.task = this.localService.getTaskById(this.id);

    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.task = {};
    
    if (this.id) {
      this.taskService.getTaskById(this.id).subscribe((task) => {
        this.task = task;
        console.log(task)
      }, (error) => {
        console.error('Error retrieving task:', error);
      });
    } else {
      console.error('Task ID is not defined');
    }
  }

  submitForm() {
    this.taskService.updateTask(this.task).subscribe((res) =>{
      console.log(res);
    })

    //local storage 
    // this.localService.updateTask(this.task);
    // this.localService.showSuccess("Task Saved", "Task Management")

    setTimeout(() => {
      this.router.navigate(['task-list']);

    }, 1000);

  }

}
