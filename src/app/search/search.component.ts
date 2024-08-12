import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchText: string = '';
  tasks: any[] = [];

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const searchTerm = params['q'];
      if (searchTerm) {
        this.searchText = searchTerm;
        this.searchTasks();
      }
    });
  }

  searchTasks() {
    if (this.searchText.trim() !== '') {
      this.tasks = this.taskService.searchTasksByTitle(this.searchText);
    } else {
      this.tasks = [];
    }
  }
}
