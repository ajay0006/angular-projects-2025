import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/taskComponent'
import { AddTaskForm } from '../add-task-form/add-task-form.component';
import { test_tasks } from '../test-tasks';
import { Task_Object } from '../../models/task.model';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskForm],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) tasksUserId!: string;
  @Input({ required: true }) name!: string;
  isAddTaskFormVisible = false;

constructor(private tasksService: TasksService) {
  this.tasksService = tasksService;
  }

  // onCompleteTask(taskId: string) {
  //   this.tasksService.completeTask(taskId);
  // }

  onStartAddTask() {
    this.isAddTaskFormVisible = true;
  }
  onCloseAddTask() {
    this.isAddTaskFormVisible = false;
  }
  onDeleteAllTasks() {
      console.log('Delete All Tasks button clicked.');
  }

  get selectedUserTasks() {
    return this.tasksService.getTasksByUserId(this.tasksUserId);
  }
}
