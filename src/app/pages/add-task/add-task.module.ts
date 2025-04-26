import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskPageRoutingModule } from './add-task-routing.module';
import { AddTaskPageComponent } from './add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddTaskPageComponent],
  imports: [
    CommonModule,
    AddTaskPageRoutingModule,
    // AddTaskModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AddTaskPageModule { }
