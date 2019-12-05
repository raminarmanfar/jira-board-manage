import { ITask } from './../../models/task.model';
import { ServerService } from './../../services/server.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  tasks: ITask[];

  constructor(private serverService: ServerService) { }

  ngOnInit() {
  }

  onClick() {
    this.serverService.getAllTasks().subscribe(res => {
      console.log('>>>', res);
      this.tasks = res;
    });
  }

}
