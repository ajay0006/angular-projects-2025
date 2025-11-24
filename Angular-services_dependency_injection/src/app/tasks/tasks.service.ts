import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

// this is needed when you are using a service 
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks = signal<Task[]>([]);

  addTasks(taskData: Task) {
    const newTask: Task = { ...taskData, id: Math.random().toString(), status: 'OPEN' }
    this.tasks.update(oldTasks => [...oldTasks, newTask]);
  }

}
