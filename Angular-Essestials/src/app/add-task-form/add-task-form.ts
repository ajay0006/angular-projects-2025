import { Component, Output, EventEmitter} from '@angular/core';
import { Task_Object } from '../../models/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.html',
  imports: [FormsModule],
  styleUrls: ['./add-task-form.css']
})
export class AddTaskForm {
    @Output() cancel = new EventEmitter<void>();
    @Output() addTask = new EventEmitter<Task_Object>();
    taskObj: Task_Object = { id: '', userId: '', title: '', summary: '', dueDate: '' };

  // visible = false;
  // @Input({ required: true}) taskObject: Task_Object = { id: '', userId: '', title: '', summary: '', dueDate: '' };
  // @Output() addTask = new EventEmitter<Task_Object>();

  // openForm() {
  //   this.visible = true;
  // }

  

  onCloseForm() {
    this.cancel.emit();
    // Reset the form state if needed

    // this.visible = false;
    // this.taskObject = { id: '', userId: '', title: '', summary: '', dueDate: '' };
  }

  submitTaskForm() {
    if (this.taskObj.title.trim()) {
      this.addTask.emit(this.taskObj);
      this.onCloseForm();
    }
  }
}