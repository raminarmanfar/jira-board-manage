import { Component } from '@angular/core';
import { ITask } from 'src/app/models/task.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  addTask(task: ITask) {
    if (task) {
      console.log('>>>>> task', task);
    }
  }
}
