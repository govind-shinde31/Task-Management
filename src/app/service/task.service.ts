import { Injectable } from '@angular/core';
import { Task } from '../shared/task.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private localStorageKey = 'tasks';

  constructor(private toastr: ToastrService) {
    // Load tasks from localStorage on service initialization
    const savedTasks = localStorage.getItem(this.localStorageKey);
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }


  getTaskById(id: string): Task {
    const t = this.tasks.find(t => t.id === +id) ?? {
      id: 0,
      title: '',
      description: '',
      dueDate: new Date(),
      completed: false,
    };

    return t;

  }

  // get all task from localstorage
  getTasks(): Task[] {
    return this.tasks;
  }

  saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }

  // add task into the local storage with id
  addTask(task: Task): void {
   
    this.tasks.push(task);
    this.saveTasks(this.tasks);
  }
  
  // update the exiting task
  updateTask(updatedTask: Task): void {
    const task = this.tasks.find(task => task.id === updatedTask.id);
    if (task) {
      task.completed = updatedTask.completed;
      task.title = updatedTask.title;
      task.description = updatedTask.description;
      task.dueDate = updatedTask.dueDate;
      this.saveTasks(this.tasks);
    }
  }

  // delet tasks from localstorage
  deleteTask(taskId: number): void {
    const index = this.tasks.findIndex(t => t.id === taskId);
    this.tasks.splice(index, 1);
    this.saveTasks(this.tasks);
  }

  completeTask(taskId: number, status: boolean): void {
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      task.completed = status;
      this.saveTasks(this.tasks);
    }
  }

  showSuccess(message: any, title: any) {
    this.toastr.success(message, title)
  }
}
