import { Component } from '@angular/core';
import { NgClass, NgForOf } from "@angular/common";

@Component({
  selector: 'task-card-skeleton',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './task-card-skeleton.component.html',
  styleUrl: './task-card-skeleton.component.css'
})
export class TaskCardSkeletonComponent {
}
