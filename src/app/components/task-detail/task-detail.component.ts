import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TaskType, TaskStatus, OperationType } from '../../models/task-enums';
import { DetailPageData } from '../../models/detail-page-data.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent {
  public get taskTypes() { return TaskType; }
  public get taskStatus() { return TaskStatus; }
  public get operationType() { return OperationType; }

  taskForm: FormGroup;

  constructor(
    fb: FormBuilder,
    public dialogRef: MatDialogRef<TaskDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DetailPageData) {
      this.taskForm = fb.group({
        mainTaskNo: new FormControl({ value: this.data.task.mainTaskNo, disabled: false }),
        subTaskNo: new FormControl({ value: this.data.task.subTaskNo, disabled: false }),
        assignDate: new FormControl({ value: this.data.task.assignedDate, disabled: this.data.operationType === OperationType.ADD }),
        doneDate: new FormControl({ value: this.data.task.doneDate, disabled: this.data.operationType === OperationType.ADD }),
        type: new FormControl({ value: this.data.task.type, disabled: false }),
        status: new FormControl({ value: this.data.task.status, disabled: false }),
        desc: new FormControl({ value: this.data.task.desc, disabled: false })
      });
    }

  onCancelClick(): void {
    this.dialogRef.close(undefined);
  }

  onFormSubmit() {
    this.dialogRef.close(this.taskForm);
  }
}
