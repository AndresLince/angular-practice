import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks = ['Task 1', 'Task 2', 'Task 3' ];
}
