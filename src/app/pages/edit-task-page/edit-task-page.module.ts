import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTaskPageRoutingModule } from './edit-task-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTaskPageComponent } from './edit-task-page.component';



@NgModule({
  declarations: [EditTaskPageComponent],
  imports: [
    CommonModule,
    EditTaskPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EditTaskPageModule { }
