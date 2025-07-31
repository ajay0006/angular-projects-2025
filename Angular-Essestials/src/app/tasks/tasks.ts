import { Component, Input } from '@angular/core';
import { Task } from '../task/task'
import { test_tasks } from '../test-tasks';


@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({ required: true }) name!: string;
  taskList = test_tasks;

  onDeleteTask(taskId: string) {
      console.log(`Task with ID ${taskId} deleted.`);
      // Here you would typically emit an event or call a service to handle task deletion
  }

  onAddTask() {
      console.log('Add Task button clicked.');
      // Here you would typically open a dialog or navigate to a task creation form
  }

  onDeleteAllTasks() {
      console.log('Delete All Tasks button clicked.');
      // Here you would typically emit an event or call a service to handle bulk task deletion
  }
}
