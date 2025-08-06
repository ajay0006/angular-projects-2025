import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/taskComponent';
import { AddTaskForm } from '../add-task-form/add-task-form.component';
import { TasksComponent } from './tasks.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskComponent, AddTaskForm, TasksComponent],
  imports: [CommonModule, FormsModule],
  exports: [TasksComponent]
})
export class TasksModule { }
