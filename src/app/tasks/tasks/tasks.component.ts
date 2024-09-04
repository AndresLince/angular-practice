import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('TasksComponent ngOnChanges', changes);
  }
  ngOnInit(): void {
    console.log('TasksComponent ngOnInit');
  }
}
