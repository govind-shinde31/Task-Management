import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  apiUrl = "http://localhost:8080/api/tasks"

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  showSuccess(message: any, title: any) {
    this.toastr.success(message, title)
  }

  public getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  public createTask(task: Task): Observable<Task> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Task>(this.apiUrl, task, { headers });
  }

  public deleteTask(taskId: number): Observable<Task> {
    return this.http.delete<Task>(`${this.apiUrl}/${taskId}`,)
  }

  public getTaskById(id: string): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  public updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }

  public searchTasksByTitle(title: string): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/search`, {
      params: new HttpParams().set('title', title)
    });
  }
}
