import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ITask } from '../../models/task.model';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { OperationType } from '../../models/task-enums';
import { OperationDetail } from 'src/app/models/operation-detail.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() addTask: EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor(public dialog: MatDialog) {}

  openAddTaskDialog(): void {
    const today = new Date();
    const task: ITask = {
      mainTaskNo: null,
      subTaskNo: null,
      assignDate: today,
      doneDate: null,
      type: null,
      status: null,
      desc: null
    };

    const detailPageData: OperationDetail = { task, operationType: OperationType.ADD };

    const dialogRef = this.dialog.open(TaskDetailComponent, {
      width: '550px',
      data: detailPageData
    });

    dialogRef.afterClosed().subscribe((task: ITask) => this.addTask.emit(task));
  }}
