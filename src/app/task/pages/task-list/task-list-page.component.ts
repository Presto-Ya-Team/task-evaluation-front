import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Task } from "../../interfaces/task.interface";
import { TasksService } from "../../services/tasks.service";
import { NgForOf } from "@angular/common";
import { TaskCardComponent } from "../../components/task-card/task-card.component";
import { TaskCardSkeletonComponent } from "../../components/task-card-skeleton/task-card-skeleton.component";

@Component( {
  selector: 'task-list-page',
  standalone: true,
  templateUrl: './task-list-page.component.html',
  imports: [
    RouterLink,
    NgForOf,
    TaskCardComponent,
    TaskCardSkeletonComponent,
  ],
  styleUrls: ['./task-list-page.component.css']
} )
export class TaskListPageComponent implements OnInit {
  tasks = signal<Task[]>( [] )
  isLoading = signal<boolean>( false )
  isError = signal<boolean>( false )

  private readonly tasksService = inject( TasksService )

  ngOnInit() {
    this.loadTasks()
  }

  loadTasks() {
    this.isLoading.set( true )
    this.isError.set( false )
    this.tasksService.getTasks().subscribe( {
      next: (tasks) => {
        this.tasks.set( tasks )
        this.isLoading.set( false )
      },
      error: () => {
        this.isLoading.set( false )
        this.isError.set( true )
      },
    } )
  }
}
