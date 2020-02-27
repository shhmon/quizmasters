import { Component, OnInit, Inject } from "@angular/core";
import { HttpService } from "../http.service";
import { DataServiceService } from "../data-service.service";
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: "app-words",
  templateUrl: "./words.component.html",
  styleUrls: ["./words.component.css"]
})
export class WordsComponent implements OnInit {
  constructor(private http: HttpService, private data: DataServiceService, public dialog: MatDialog) {
    this.handleClick = this.handleClick.bind(this);
  }

  question = { words: [], definition: String, answer: String, score: Number };
  guess: String;
  round = 1;
  successes = 0;

  ngOnInit(): void {
    this.round = 1;
    this.successes = 0;
    this.guess = "";
    this.refreshData();
  }

  refreshData(): void {
    this.http.fetchData().subscribe(data => {
      this.question = JSON.parse(JSON.stringify(data));
    });
    this.guess = "";
  }

  handleClick(event) {
    if (this.round < 3) {
      if (!this.guess) {
        this.guess = event.currentTarget.value;
			} else return;
			//@ts-ignore
      if (this.guess === this.question.answer) {
        this.successes += 1;
      }
      this.round += 1;
      setTimeout(() => {
        this.refreshData();
      }, 1000);
    } else {
      setTimeout(() => {
        console.log('');
      }, 1000);
      this.openDialog();
      this.data.changeMessage(this.successes);
      this.ngOnInit();
    }
  }

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
    data: {
    score: this.successes
  }})}


}

export interface DialogData {
  score: Number;
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog.html'
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  public dialogRef: MatDialogRef<DialogDataExampleDialog>;



}
