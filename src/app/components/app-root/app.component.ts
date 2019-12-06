import { Component } from '@angular/core';
import { ITask } from '../../models/task.model';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private serverService: ServerService) {}

  addTask(task: ITask) {
    if (task) {
      this.serverService.addNewTask(task).subscribe(
        res => console.log('>>>', res),
        err => console.error('>>> err:', err)
      );
    }
  }
}
