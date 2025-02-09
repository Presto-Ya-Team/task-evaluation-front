import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'tasks', component: TaskComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }