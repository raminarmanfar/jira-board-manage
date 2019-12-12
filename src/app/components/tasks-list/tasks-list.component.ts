import { selectSelectedTask } from './../../store/selectors/task.selectors';
import { GetTask, UpdateTask, AddTask, UpdateTaskStatus } from './../../store/actions/task.actions';
import { Component, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort, MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITask } from '../../models/task.model';
import { IAppState } from '../../store/state/app.state';
import { selectTaskList } from '../../store/selectors/task.selectors';
import { GetTasks, DeleteTask } from '../../store/actions/task.actions';
import { OperationDetail } from '../../models/operation-detail.model';
import { OperationType, TaskStatus } from '../../models/task-enums';
import { ConfirmationPopupComponent } from '../confirmation-popup/confirmation-popup.component';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { ConfirmationData } from '../../models/confirmation-data.mode';
@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TasksListComponent {
  columnsToDisplay: string[] = ['mainTaskNo', 'subTaskNo', 'assignDate', 'type', 'status', 'id'];
  colsDisplayValues: string[] = ['Main Task No', 'Sub Task No', 'Assign Date', 'Type', 'Status', 'Operations'];
  tasks$: Observable<ITask[]> = this._store.pipe(select(selectTaskList));
  task$: Observable<ITask> = this._store.pipe(select(selectSelectedTask));
  dataSource: MatTableDataSource<ITask>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private _store: Store<IAppState>,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this._store.dispatch(new GetTasks);
    this.tasks$.subscribe(tasks => {
      this.dataSource = new MatTableDataSource<ITask>(tasks);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isIdCol(column: string): boolean {
    return !['notStarted', 'mainTaskNo', 'subTaskNo', 'type', 'status'].includes(column);
  }

  onOperation(operationDetail: OperationDetail) {
    const confirmData: ConfirmationData = {
      title: null,
      confirmBtnCaption: 'Yes',
      rejectBtnCaption: 'No'
    };

    switch (operationDetail.operationType) {
      case OperationType.UPDATE:
        this.raiseUpdatePopup(operationDetail.taskId, operationDetail.task).subscribe(updatedTask => {
          if (updatedTask) {
            this._store.dispatch(new UpdateTask({ taskId: operationDetail.taskId, updatedTask }));
            this._snackBar.open(`Task (${operationDetail.task.mainTaskNo}, ${operationDetail.task.subTaskNo}) updated.`, 'UPDATE TASK', { duration: 3000 });
          }
        });
        break;
      case OperationType.DELETE:
        const deleteConfirmData: ConfirmationData = {
          title: 'Deleting selected task from the list, are you sure?',
          confirmBtnCaption: 'Yes',
          rejectBtnCaption: 'No'
        };
        this.raiseConfirmPopup(deleteConfirmData).subscribe(res => {
          if (res) {
            this._store.dispatch(new DeleteTask(operationDetail.task.id));
            this._snackBar.open(`Task (${operationDetail.task.mainTaskNo}, ${operationDetail.task.subTaskNo}) deleted.`, 'DELETE TASK', { duration: 3000 });
          }
        });
        break;
      case OperationType.DONE:
        confirmData.title = 'Done the selected task, are you sure?';
        this.raiseConfirmPopup(confirmData).subscribe(res => {
          if (res) {
            this._store.dispatch(new UpdateTaskStatus({
              taskId: operationDetail.taskId,
              updatedTask: operationDetail.task,
              newStatus: TaskStatus.DONE
            }));
            this._snackBar.open(`Task (${operationDetail.task.mainTaskNo}, ${operationDetail.task.subTaskNo}) is done.`, 'TASK DONE', { duration: 3000 });
          }
        });
        break;
      case OperationType.BLOCK:
        confirmData.title = 'Block the selected task, are you sure?';
        this.raiseConfirmPopup(confirmData).subscribe(res => {
          if (res) {
            this._store.dispatch(new UpdateTaskStatus({
              taskId: operationDetail.taskId,
              updatedTask: operationDetail.task,
              newStatus: TaskStatus.BLOCKED
            }));
            this._snackBar.open(`Task (${operationDetail.task.mainTaskNo}, ${operationDetail.task.subTaskNo}) is blocked!`, 'TASK BLOCKED', { duration: 3000 });
          }
        });
        break;
      case OperationType.PROGRESS:
        confirmData.title = 'Moving the selected task into the progress, are you sure?';
        this.raiseConfirmPopup(confirmData).subscribe(res => {
          if (res) {
            this._store.dispatch(new UpdateTaskStatus({
              taskId: operationDetail.taskId,
              updatedTask: operationDetail.task,
              newStatus: TaskStatus.IN_PROGRESS
            }));
            this._snackBar.open(`Task (${operationDetail.task.mainTaskNo}, ${operationDetail.task.subTaskNo}) moved to progress.`, 'IN PROGRESS', { duration: 3000 });
          }
        });
        break;

    }
  }

  raiseUpdatePopup(taskId: number, task: ITask): Observable<ITask> {
    const detailPageData: OperationDetail = { task, taskId, operationType: OperationType.UPDATE };

    const dialogRef = this.dialog.open(TaskDetailComponent, {
      width: '550px',
      data: detailPageData
    });
    return dialogRef.afterClosed();
  }

  raiseConfirmPopup(confirmationData: ConfirmationData): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      width: '450px',
      data: confirmationData
    });
    return dialogRef.afterClosed();
  }

  onFilterTogglesChange(togglesStatus: string[]) {
    console.log('>>>', togglesStatus);
  }
}
