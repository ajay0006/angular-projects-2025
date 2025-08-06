import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) tasksUserId!: string;
  @Input({ required: true }) name!: string;
  isAddTaskFormVisible = false;

constructor(private tasksService: TasksService) {
  this.tasksService = tasksService;
  }

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
