import { Component, input } from '@angular/core';
import { NgClass, NgForOf } from "@angular/common";
import { Task } from "../../interfaces/task.interface";
import { TaskStatus } from "../../interfaces/task-status.enum";

@Component({
  selector: 'task-card',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {

  task = input.required<Task>();

  protected readonly TaskStatus = TaskStatus;
}
