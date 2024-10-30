import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./task/tasks.routes').then(m => m.TASKS_ROUTES),
  }
];
