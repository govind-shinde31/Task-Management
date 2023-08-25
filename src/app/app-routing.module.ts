import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

const routes: Routes = [
  {
    path: 'create-task', component: CreateTaskComponent
  },
  {
    path: 'edit-task/:id', component: EditTaskComponent
  },
  {
    path: '**', component: TaskListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
