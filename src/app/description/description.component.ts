import { Component } from '@angular/core';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {
  selectedTask: Task | null = null;

}
