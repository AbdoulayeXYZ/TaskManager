import { Task } from './../interfaces/task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/Task/'
  }

  getTasks(): Observable<Task[]> {
   return this.http.get<Task[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  saveTask(product: Task): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`,product)
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  updateTask(id: number, product: Task): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, product);
  }
}