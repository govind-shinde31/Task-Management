import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
  {
    path:'create-task', component: CreateTaskComponent
  },
  {
    path:'task-list', component: TaskListComponent
  },
  {
    path:'description', component: DescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
