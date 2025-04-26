import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [TaskComponent],
})
export class TaskModule { }
