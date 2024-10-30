import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { TaskListPageComponent } from "./pages/task-list/task-list-page.component";

export const TASKS_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: TaskListPageComponent },
      { path: '**', redirectTo: '/' },
    ]
  }
];
