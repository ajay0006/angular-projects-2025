import { Component, Input, Output, EventEmitter } from '@angular/core';
import {type Task_Object } from '../../models/task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
    @Input({ required: true }) task: Task_Object = { id: '', userId: '', title: '', summary: '', dueDate: '' };
    @Output() completeTask = new EventEmitter<string>();

    // onCompleteTask(taskId: string) {
    //     this.completeTask.emit(taskId);
    //     console.log(`Task with ID ${taskId} completed.`);
    // }    
    onCompleteTask() {
        this.completeTask.emit(this.task.id);
    }

}
