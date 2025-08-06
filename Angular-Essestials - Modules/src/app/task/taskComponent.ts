import { Component, Input, inject } from '@angular/core';
import {type Task_Object } from '../../models/task.model';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './taskComponent.html',
  styleUrl: './taskComponent.css'
})
export class TaskComponent {
    @Input({ required: true }) task: Task_Object = { id: '', userId: '', title: '', summary: '', dueDate: '' };

    private taskService = inject(TasksService); 

    completeTask() {
        this.taskService.completeTask(this.task.id);
    }

}
