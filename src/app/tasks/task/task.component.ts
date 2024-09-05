import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit, OnChanges {
  @Input() task: string = '';
  ngOnChanges(changes: SimpleChanges): void {
    console.log('TasksComponent ngOnChanges', changes);
  }
  ngOnInit(): void {
    console.log('TasksComponent ngOnInit');
  }
}
