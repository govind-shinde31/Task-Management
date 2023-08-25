import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../service/task.service';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
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
    this.router.navigate(['list']);
  }
}
