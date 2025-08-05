import { Component, Input, Output, EventEmitter } from '@angular/core';
import {type Task_Object } from '../../models/task.model';
import { CardComponent } from "../shared/card/cardComponent";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './taskComponent.html',
  styleUrl: './taskComponent.css'
})
export class TaskComponent {
    @Input({ required: true }) task: Task_Object = { id: '', userId: '', title: '', summary: '', dueDate: '' };
    @Output() completeTask = new EventEmitter<string>();   
    onCompleteTask() {
        this.completeTask.emit(this.task.id);
    }

}
