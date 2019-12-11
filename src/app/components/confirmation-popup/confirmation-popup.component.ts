import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmationData } from '../../models/confirmation-data.mode';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmationData>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationData
  ) { }

  submit(isConfirmed: boolean) {
    this.dialogRef.close(isConfirmed);
  }
}
