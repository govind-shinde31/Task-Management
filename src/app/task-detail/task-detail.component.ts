import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../service/task.service';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
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
}
