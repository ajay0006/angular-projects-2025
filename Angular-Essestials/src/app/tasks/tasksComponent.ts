import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/taskComponent'
import { AddTaskForm } from '../add-task-form/add-task-formComponent';
import { test_tasks } from '../test-tasks';
import { Task_Object } from '../../models/task.model';


@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskForm],
  templateUrl: './tasksComponent.html',
  styleUrl: './tasksComponent.css'
})
export class TasksComponent {
  @Input({ required: true }) tasksUserId!: string;
  @Input({ required: true }) name!: string;
  taskList = test_tasks;
  isAddTaskFormVisible = false;

  onCompleteTask(taskId: string) {
    this.taskList = this.taskList.filter(task => task.id !== taskId);
    console.log(`Task with ID ${taskId} completed.`);
  }

  onAddTask(taskObject: Task_Object) {
    const newTask: Task_Object = {
      ...taskObject,
      id: this.generateUniqueId(),
      userId: this.tasksUserId
    };
    this.taskList.push(newTask);
    console.log('New Task Added:', newTask);
    this.isAddTaskFormVisible = false;
  }

  onStartAddTask() {
    this.isAddTaskFormVisible = true;
  }
  onCancelAddTask() {
    this.isAddTaskFormVisible = false;
  }
  onDeleteAllTasks() {
      console.log('Delete All Tasks button clicked.');
  }

  get selectedUserTasks() {
    return this.taskList.filter(task => task.userId === this.tasksUserId);
  }

  private generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  }
}
