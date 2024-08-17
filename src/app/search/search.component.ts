import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../service/task.service';
import { Task } from '../shared/task.model';
import { BackendService } from '../shared/backend.service';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchText: string = '';
  tasks: Task[] = [];

  constructor(private route: ActivatedRoute, private taskService: BackendService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const searchTerm = params['q'];
      if (searchTerm) {
        this.searchText = searchTerm;
        this.searchTasks(searchTerm);
      } else {
        this.tasks = [];
      }
    });

  // The commented code is used for local storage

    // this.route.queryParams.subscribe(params => {
    //   const searchTerm = params['q'];
    //   if (searchTerm) {
    //     this.searchText = searchTerm;
    //     this.searchTasks();
    //   }
    // });
  }

  searchTasks(title: string) {
    if (this.searchText.trim() !== '') {
      this.taskService.searchTasksByTitle(title).pipe(
        tap((res: any) => {this.tasks = res;
          console.log(res)
    }),
        catchError((error: any) => {
          console.error('Error searching tasks:', error);
          return of([]); // return an empty array on error
        })
      ).subscribe();
    } else {
      this.tasks = [];
    }
  }

  // The commented code is used for local storage

  // searchTasks() {
  //   if (this.searchText.trim() !== '') {
  //     this.tasks = this.taskService.searchTasksByTitle(this.searchText);
  //   } else {
  //     this.tasks = [];
  //   }
  // }
}
