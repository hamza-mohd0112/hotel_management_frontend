import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog-box',
  templateUrl: './delete-dialog-box.component.html',
  styleUrl: './delete-dialog-box.component.scss'
})
export class DeleteDialogBoxComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DeleteDialogBoxComponent>) {
    
  }

  ngOnInit() {
      
  }

  onClose(event: any){
    this.dialogRef.close({data: event});
  }

}
