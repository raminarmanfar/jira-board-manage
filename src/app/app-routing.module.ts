import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/tasks-list',
    pathMatch: 'full'
  },
  {
    path: 'tasks-list',
    component: TasksListComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
