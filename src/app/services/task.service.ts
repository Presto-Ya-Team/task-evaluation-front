import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {Task} from "../models/task.model";

const base_route = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private http = inject(HttpClient);

  constructor() { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${base_route}/tasks`);
  }
}
