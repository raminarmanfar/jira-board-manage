import { Component, Output, EventEmitter, Input } from '@angular/core';
import { OperationDetail } from '../../models/operation-detail.model';
import { OperationType } from '../../models/task-enums';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent {
  @Input() taskId: number;
  @Output() operation: EventEmitter<OperationDetail> = new EventEmitter<OperationDetail>();

  get opType() { return OperationType; }

  doOperation(event, operationType: OperationType) {
    event.stopPropagation();

    const operationDetail: OperationDetail = {
      operationType: operationType,
      taskId: this.taskId
    }
    this.operation.emit(operationDetail);
  }
}
