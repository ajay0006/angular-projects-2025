import { Component, Output, Input, EventEmitter, inject} from '@angular/core';
import { Task_Object } from '../../models/task.model';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-add-task-form',
  standalone: false,
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskForm {
  // Input properties of this component that can be set by the parent component or outside of it
  // aka parent component can pass data to this component
  @Input({ required: true }) userId!: string;

  // Output are custom events that this component can emit to notify the parent component
  // aka parent component can listen to these events or child component can emit these events
  // to the parent component
  
  @Output() close = new EventEmitter<void>();
  taskObj: Task_Object = { id: '', userId: '', title: '', summary: '', dueDate: '' };

  // the new way to inject services, using inject function, it replaces constructor injection
  // used in the TasksComponent
  private taskService = inject(TasksService);

  onCloseForm() {
    this.close.emit();
  }

  submitTaskForm() {
    this.taskService.addTask(this.taskObj, this.userId);
    this.onCloseForm();    
  }
}