import { test_tasks } from '../test-tasks';
import { type Task_Object } from '../../models/task.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private taskList = test_tasks;

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.taskList = JSON.parse(tasks);
    }
  }

  getTasksByUserId(userId: string) {
    return this.taskList.filter(task => task.userId === userId);
  }

  addTask(taskObject: Task_Object, userId: string) {
    const newTask: Task_Object = {
      ...taskObject,
      id: this.generateUniqueId(),
      userId: userId
    };
    this.taskList.push(newTask);
    this.saveTasksToLocalStorage();
  }

  completeTask(taskId: string) {
    this.taskList = this.taskList.filter(task => task.id !== taskId);
    this.saveTasksToLocalStorage();
  }

  private generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  }

  private saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }
}