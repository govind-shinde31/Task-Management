import { Injectable } from '@angular/core';
import { Task } from '../shared/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private localStorageKey = 'tasks';

  constructor() {
    // Load tasks from localStorage on service initialization
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  // grt all task from localstorage
  getTasks(): Task[] {
    const storedTasks = localStorage.getItem(this.localStorageKey);
    return storedTasks ? JSON.parse(storedTasks) : [];
  }

  saveTasks(tasks: Task[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }

  // add task into the local storage with id
  addTask(task: Task): void {
    const tasks = this.getTasks();
    task.id = Date.now(); // Generate a unique id (timestamp-based)
    tasks.push(task);
    this.saveTasks(tasks);
  }
  // update the exiting task
  updateTask(updatedTask: Task): void {
    const tasks = this.getTasks();

  }

  // delet tasks from localstorage
  deleteTask(taskId: any): void {
    this.tasks.splice(taskId, 1);
    this.saveTasks(this.tasks);
    }
  

  completeTask(taskId: number): void {
    const tasks = this.getTasks();
    const task = tasks.find(task => task.id === taskId);
    if (task) {
      task.completed = true;
      this.saveTasks(tasks);
    }
  }

}
