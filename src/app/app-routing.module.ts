import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainnavbarComponent } from './mainnavbar/mainnavbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { StartingPageComponent } from './starting-page/starting-page.component';

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
    path: 'task-list', component: TaskListComponent
  },  {
    path:'navbar', component:NavbarComponent
  },
  {
    path:'mainnavbar', component:MainnavbarComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'search',component:SearchComponent
  },
  {
    path:'starting-page',component:StartingPageComponent
  },

  {
    path:'',redirectTo:'register', pathMatch:"full"
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
