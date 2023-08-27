import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../service/task.service';
import { Task } from '../shared/task.model';
import {faCalendar} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  faCalender = faCalendar;
  id!: string
  task!: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? ''
    this.task = this.taskService.getTaskById(this.id);
  }

  submitForm() {
    this.taskService.updateTask(this.task);

    this.taskService.showSuccess("Task Saved", "Task Management")

    setTimeout(() => {
      this.router.navigate(['list']);

    }, 1000);

  }

}
