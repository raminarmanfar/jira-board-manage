import { Component } from '@angular/core';
import { ITask } from 'src/app/models/task.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  addTask(taskForm: FormGroup) {
    console.log('>>>>> task form:', taskForm);
    const task: ITask = taskForm.getRawValue();
    console.log('>>>>> task', task);
  }
}
