import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  http_client = inject(HttpClient); 
  tasks: any[] = [];
  API_URL = 'http://localhost:3000/tasks';

  constructor() {
    this.fetchTasks();
  }

  async fetchTasks() {
    this.http_client.get<any[]>(this.API_URL).subscribe({
      next: (data) => {
        this.tasks = data;
      }
    });
  }
}