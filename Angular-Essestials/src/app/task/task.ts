import { Component, Input } from '@angular/core';
type Task_Object = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string
}

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
    @Input({ required: true }) task: Task_Object = { id: '', userId: '', title: '', summary: '', dueDate: '' };

    onCompleteTask(taskId: string) {
        console.log(`Task with ID ${taskId} completed.`);
        // Here you would typically emit an event or call a service to handle task completion
    }

}
