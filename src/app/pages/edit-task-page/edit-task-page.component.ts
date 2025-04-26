import { Component, OnInit } from '@angular/core';
import { Task } from '../../task.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-task-page',
  templateUrl: './edit-task-page.component.html',
  styleUrl: './edit-task-page.component.css'
})

export class EditTaskPageComponent implements OnInit {
  form = this.fb.group({
    title: ['',[Validators.required, Validators.maxLength(100) , Validators.minLength(20)]],
        description: [''],
        status: ['pending'],
  });

  taskId: number = 0;

  constructor(private route: ActivatedRoute,private router: Router,private fb: FormBuilder) {}

    ngOnInit() {
      this.taskId = Number(this.route.snapshot.paramMap.get('ID'));
      const task = history.state as Task;

      if (task && task?.id === this.taskId) {
        this.form.patchValue(task);
        console.log('not found');
      } else {
        const storedTasks = localStorage.getItem('tasks');
        const tasks: Task[] = storedTasks ? JSON.parse(storedTasks) : [];
        const found = tasks.find(t => t.id === this.taskId);
        if (found) {
          this.form.patchValue(found);
        } else {
          this.router.navigate(['/']);
        }
      }

    }

  onSubmit(){
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.form.valid) {
      const updatedTask: Task = {
        id: this.taskId,
        title: this.form.value.title as string,
        description: this.form.value.description ?? '',
        status: this.form.value.status as 'Pending' | 'Done',
      };

      const storedTasks = localStorage.getItem('tasks');
      const tasksArray: Task[] = storedTasks ? JSON.parse(storedTasks) : [];

      const updatedTasks: Task[] = tasksArray.map((task: Task): Task => 
      task.id === this.taskId ? updatedTask : task);
      
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      alert('Task updated successfully!');
      this.router.navigate(['/']);
    }

  }
}
