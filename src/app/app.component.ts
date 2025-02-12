import { Component } from '@angular/core';
import { Task } from './task.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, HttpClientModule],
  providers: [TasksService],
})
export class AppComponent {
  title = 'task-evaluation-front';
  
  tasks: Task[] = [];
  loading = false;
  error: string | null = null;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.loading = true;
    this.tasksService.getTasks().subscribe(
      (data) => {
        console.log('Datos recibidos:', data);
        this.tasks = data; // Asegurar que se asigna el array recibido
        this.loading = false;
      },
      (err) => {
        console.error('Error al cargar tareas:', err);
        this.error = 'Error al cargar las tareas';
        this.loading = false;
      }
    );
  }
  
}