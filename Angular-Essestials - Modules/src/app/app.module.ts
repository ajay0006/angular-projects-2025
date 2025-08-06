import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { App } from './app';
import { UserInputComponent } from './user-input/user-input.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
    declarations: [
        App,
        HeaderComponent,
        UserInputComponent,
    ],
    imports: [BrowserModule, SharedModule, TasksModule],
    bootstrap: [App]
})
export class AppModule { }
