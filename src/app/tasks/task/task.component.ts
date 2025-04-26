import { Component } from '@angular/core';
import { Task } from '../../task.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  tasks: Task[] = [];
  constructor(private router: Router) {}


  ngOnInit() {
    this.getTasks();

  }
  getTasks() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    } else {
      this.tasks = [];
    }
  }

  editTask(task: Task) {
    this.router.navigate(['/edit-task',task.id] , { state: task });
  }
  deleteTask(id: number | null | undefined) {
    if(confirm('Are you sure you want to delete this task?')) {
      this.tasks = this.tasks.filter(task => task.id !== id);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      alert('Task deleted successfully!');
    }
    // this.tasks = this.tasks.filter(t => t.id !== task.id);
  }
}
