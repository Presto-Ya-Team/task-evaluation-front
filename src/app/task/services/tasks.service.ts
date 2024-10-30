import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Task } from "../interfaces/task.interface";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private readonly http: HttpClient = inject(HttpClient);

  getTasks() {
    return this.http.get<Task[]>(`${environment.API_BASE_URL}/tasks`);
  }
}
