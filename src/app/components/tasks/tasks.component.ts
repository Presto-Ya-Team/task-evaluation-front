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
  loading: boolean = false;
  error: boolean = false;

  constructor() {
    this.fetchTasks();
  }

  async fetchTasks() {
    this.loading = true;
    console.log('Fetching tasks');
    this.http_client.get<any[]>(this.API_URL).subscribe({
      next: (data) => {
        this.tasks = data;
      },
      error: (error) => {
        console.error('Error fetching tasks', error);
        this.error = true;
      }
    });
    this.loading = false;
  }
}