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
  submitBtnCaption: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TaskDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DetailPageData
  ) { }

  ngOnInit(): void {
    switch (this.data.operationType) {
      case OperationType.ADD: this.submitBtnCaption = 'Add Task'; break;
      case OperationType.UPDATE: this.submitBtnCaption = 'Update Task'; break;
      default: this.submitBtnCaption = 'Nothing';
    }
    this.taskForm = this.fb.group({
      mainTaskNo: new FormControl({ value: this.data.task.mainTaskNo, disabled: false }),
      subTaskNo: new FormControl({ value: this.data.task.subTaskNo, disabled: false }),
      assignDate: new FormControl({ value: this.data.task.assignDate, disabled: this.data.operationType === OperationType.ADD }),
      doneDate: new FormControl({ value: this.data.task.doneDate, disabled: this.data.operationType === OperationType.ADD }),
      type: new FormControl({ value: this.data.task.type, disabled: false }),
      status: new FormControl({ value: this.data.task.status, disabled: false }),
      desc: new FormControl({ value: this.data.task.desc, disabled: false })
    });
  }

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

  onFormSubmit() {
    this.dialogRef.close(this.taskForm.getRawValue());
  }
}
