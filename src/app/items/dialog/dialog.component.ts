import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  message = '';
  actionText = 'Continue';
  title = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string, title: string, actionText: string }) {
    this.message = data.message;
    this.title = data.title;
    this.actionText = data.actionText;
  }

  ngOnInit(): void {}
}
