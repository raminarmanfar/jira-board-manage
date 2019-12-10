import { selectSelectedTask } from './../../store/selectors/task.selectors';
import { GetTask } from './../../store/actions/task.actions';
import { Component, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITask } from '../../models/task.model';
import { IAppState } from '../../store/state/app.state';
import { selectTaskList } from '../../store/selectors/task.selectors';
import { GetTasks, DeleteTask } from '../../store/actions/task.actions';
import { OperationDetail } from '../../models/operation-detail.model';
import { OperationType } from '../../models/task-enums';
import { ConfirmationPopupComponent } from '../../confirmation-popup/confirmation-popup.component';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { ConfirmationData } from '../../models/confirmation-data.mode';
import { DetailPageData } from '../../models/detail-page-data.model';
import { map, switchMap, mergeMap } from 'rxjs/operators';
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

  constructor(private _store: Store<IAppState>, public dialog: MatDialog) { }

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
    return !['mainTaskNo', 'subTaskNo', 'type', 'status'].includes(column);
  }

  onOperation(operationDetail: OperationDetail) {
    switch (operationDetail.operationType) {
      case OperationType.UPDATE:
        this.raiseUpdatePopup(operationDetail.taskId);
        break;
      case OperationType.DELETE:
        this.raiseConfirmPopup().subscribe(res => {
          if (res) {
            this._store.dispatch(new DeleteTask(operationDetail.taskId));
          }
        });
        break;
    }
  }

  raiseUpdatePopup(taskId: number) {
    this._store.dispatch(new GetTask(taskId));
    this.task$.pipe(
      switchMap(task => {
        const detailPageData: DetailPageData = { task, operationType: OperationType.UPDATE };

        const dialogRef = this.dialog.open(TaskDetailComponent, {
          width: '550px',
          data: detailPageData
        });
        return dialogRef.afterClosed();
      }),
      map(res => )
    );
  }

  raiseConfirmPopup(): Observable<boolean> {
    const confirmationData: ConfirmationData = {
      title: 'Deleting selected task from the list, are you sure?',
      confirmBtnCaption: 'Yes',
      rejectBtnCaption: 'No'
    };

    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      width: '450px',
      data: confirmationData
    });
    return dialogRef.afterClosed();
  }
}
