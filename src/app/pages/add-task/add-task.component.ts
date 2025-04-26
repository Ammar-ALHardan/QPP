import { Component } from '@angular/core';
import { Task } from '../../task.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task-page',
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskPageComponent {
form = this.fb.group({
    title: ['',[Validators.required, Validators.maxLength(100) , Validators.minLength(20)]],
    description: [''],
    status: ['pending'],
  });
  taskId: number = 0;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) {}

    ngonInit() {
    }

  onSubmit(){
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.form.valid) {
      const newTask: Task = {
        id: Date.now(),
        title: this.form.value.title,
        description: this.form.value.description || '',
        status: (this.form.value.status ?? 'Pending') as 'Pending' | 'Done',
      };
      let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      tasks?.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      this.router.navigate(['/']);
    }
  }
}
