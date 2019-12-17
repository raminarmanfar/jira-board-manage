import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TaskType, TaskStatus, OperationType } from '../../models/task-enums';
import { OperationDetail } from '../../models/operation-detail.model';
import { ITask } from 'src/app/models/task.model';

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
  detailTitle: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TaskDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OperationDetail
  ) { }

  ngOnInit(): void {
    switch (this.data.operationType) {
      case OperationType.ADD: 
      this.detailTitle = 'Create a new task'
      this.submitBtnCaption = 'Create';
      break;
      case OperationType.UPDATE:
        this.detailTitle = 'Update selected task'
        this.submitBtnCaption = 'Update';
        break;
      default: this.submitBtnCaption = 'Nothing';
    }
    this.taskForm = this.fb.group({
      mainTaskNo: new FormControl({ value: this.data.task.mainTaskNo, disabled: false }, [Validators.required, Validators.minLength(4)]),
      subTaskNo: new FormControl({ value: this.data.task.subTaskNo, disabled: false }, [Validators.required, Validators.minLength(4)]),
      assignDate: new FormControl({ value: this.data.task.assignDate, disabled: this.data.operationType === OperationType.ADD }),
      doneDate: new FormControl({ value: this.data.task.doneDate, disabled: this.data.operationType === OperationType.ADD }),
      type: new FormControl({ value: this.data.task.type, disabled: false }, [Validators.required]),
      status: new FormControl({ value: this.data.task.status, disabled: false }, [Validators.required]),
      desc: new FormControl({ value: this.data.task.desc, disabled: false })
    });
  }

  onCancelClick(): void {
    this.dialogRef.close(null);
  }

  onFormSubmit() {
    this.dialogRef.close(this.taskForm.getRawValue());
  }

getValidatorError(inputName: string, errorType: string): boolean {
  return this.taskForm.get(inputName).hasError(errorType);
}  
}
