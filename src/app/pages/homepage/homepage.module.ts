import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { TaskModule } from '../../tasks/task/task.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    TaskModule
  ]
})
export class HomepageModule { }
