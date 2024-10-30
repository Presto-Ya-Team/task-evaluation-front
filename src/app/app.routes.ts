import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'board',
    loadComponent: () => import('./board/board.component').then(c => c.BoardComponent),
    children: [
      {
        path: 'task',
        title: 'Task',
        loadComponent: () => import('./board/pages/task/task.component').then(c => c.TaskComponent),
      },
      {
        path: 'project',
        title: 'Project',
        loadComponent: () => import('./board/pages/project/project.component').then(c => c.ProjectComponent),
      },
    ]
  },
  {
    path: '',
    redirectTo: '/board',
    pathMatch: 'full',
  }
];
