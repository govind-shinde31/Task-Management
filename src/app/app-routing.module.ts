import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [
  {
    path: 'create-task', component: CreateTaskComponent
  },
  {
    path: 'edit-task/:id', component: EditTaskComponent
  },
  {
    path: 'detail-task/:id', component: TaskDetailComponent
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
