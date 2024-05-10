import { TaskService } from '../../services/task.service';
import { Task } from './../../interfaces/task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TaskListComponent implements OnInit {
  [x: string]: any;
  Task: Task[] = []
  loading: boolean = false;

  constructor(private _taskService: TaskService) { }

  ngOnInit(): void {
    this.getTask();
  }

  getTask() {
    this.loading = true;

    this._taskService.getTasks().subscribe((data: Task[]) => {
      this.Task = data;
    })
  }

  deleteTask(id: number) {
    this._taskService.deleteTask(id).subscribe(() => {
      this.getTask();
    })
  }
}