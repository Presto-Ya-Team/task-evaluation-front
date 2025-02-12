import { Component } from '@angular/core';
import { Task } from './task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
})
export class AppComponent {
  title = 'task-evaluation-front';
  
  tasks: Task[] = [
    new Task(1, 'Tarea 1', new Date('2025-02-15'), 'pending'),
    new Task(2, 'Tarea 2', new Date('2025-02-20'), 'completed'),
    new Task(3, 'Tarea 3', new Date('2025-02-25'), 'pending'),
  ];
}