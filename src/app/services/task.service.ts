import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';
  private readonly http = inject(HttpClient);
  
  getTasks(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
