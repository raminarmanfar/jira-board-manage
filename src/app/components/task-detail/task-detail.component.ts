import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TaskType, TaskStatus } from '../../models/task-enums';
import { DetailPageData } from '../../models/detail-page-data.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent {
  public get taskTypes() { return TaskType; }
  public get taskStatus() { return TaskStatus; }

  form: FormGroup;

  constructor(
    fb: FormBuilder,
    public dialogRef: MatDialogRef<TaskDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DetailPageData) {
      this.form = fb.group({
        mainTaskNo: new FormControl({ value: this.data.task.mainTaskNo, disabled: false }),
        subTaskNo: new FormControl({ value: this.data.task.subTaskNo, disabled: false }),
        assignDate: new FormControl({ value: this.data.task.assignedDate, disabled: this.data.datesDisabled }),
        doneDate: new FormControl({ value: this.data.task.doneDate, disabled: this.data.datesDisabled })    
      });
    }

  onNoClick(): void {
    this.dialogRef.close(this.data.task);
  }  
}
