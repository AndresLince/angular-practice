import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
  @Input() task: string = '';
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.task + ' TasksComponent ngOnChanges', changes);
  }
  ngOnInit(): void {
    console.log(this.task + ' TasksComponent ngOnInit');
  }
  ngDoCheck(): void {
    console.log(this.task + ' TasksComponent ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log(this.task + ' TasksComponent ngAfterContentInit');
  }
}
