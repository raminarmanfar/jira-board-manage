import { Component, Output, EventEmitter, Input } from '@angular/core';
import { OperationDetail } from '../../models/operation-detail.model';
import { OperationType, TaskStatus } from '../../models/task-enums';
import { ITask } from '../../models/task.model';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent {
  @Input() task: ITask;
  @Input() taskId: number = null;
  @Output() operation: EventEmitter<OperationDetail> = new EventEmitter<OperationDetail>();

  get opType() { return OperationType; }
  get taskStatus() { return TaskStatus; }

  doOperation(event, operationType: OperationType) {
    event.stopPropagation();

    const operationDetail: OperationDetail = {
      operationType: operationType,
      task: this.task,
      taskId: this.taskId
    }
    this.operation.emit(operationDetail);
  }
}
