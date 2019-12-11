import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITask } from '../models/task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksUrl = '/tasks';

  constructor(private http: HttpClient) { }

  getTaskById(id: number): Observable<ITask> {
    return this.http.get<ITask>(this.tasksUrl + '/:' + id);
  }

  getAllTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.tasksUrl);
  }

  addNewTask(task: ITask): Observable<ITask> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<ITask>(this.tasksUrl, task, { headers: headers });
  }

  deleteTask(taskId: number): Observable<ITask> {
    return this.http.delete<ITask>(this.tasksUrl + '/' + taskId);
  }

  updateTask(taskId: number, updatedTask: ITask): Observable<ITask> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<ITask>(this.tasksUrl + '/' + taskId, updatedTask, {headers: headers });
  }

}
