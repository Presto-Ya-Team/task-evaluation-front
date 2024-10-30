import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {TaskService} from "../../../services/task.service";
import {Task} from "../../../models/task.model";
import {CommonModule} from "@angular/common";
import {delay, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit, OnDestroy {

  public isLoadingTasks: boolean;
  public errorMessage: string | null;
  public tasks: Task[];

  private taskService = inject(TaskService);
  private destroy$ = new Subject<void>();

  constructor() {
    this.isLoadingTasks = true;
    this.errorMessage = null;
    this.tasks = [];
  }

  ngOnInit(): void {
    this.getTasks();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public getTasks(): void {
    this.taskService.getTasks()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
      next: task => {
        this.tasks = task;
        this.isLoadingTasks = false;
      },
      error: error => {
        this.errorMessage = 'Something went wrong!';
        console.error(error);
        this.isLoadingTasks = false;
      }
    })
  }

}
