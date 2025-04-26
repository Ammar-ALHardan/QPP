import { Component } from '@angular/core';
import { TaskModule } from "../../tasks/task/task.module";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [TaskModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
