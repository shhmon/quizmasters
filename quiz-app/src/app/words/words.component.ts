import { Component, OnInit, Inject } from "@angular/core";
import { HttpService } from "../http.service";
import { DataServiceService } from "../data-service.service";
import { Observable, timer } from "rxjs";
import { take, map } from "rxjs/operators";
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef
} from "@angular/material/dialog";

@Component({
  selector: "app-words",
  templateUrl: "./words.component.html",
  styleUrls: ["./words.component.css"]
})
export class WordsComponent implements OnInit {
  constructor(
    private http: HttpService,
    private data: DataServiceService,
    public dialog: MatDialog
  ) {
    this.handleClick = this.handleClick.bind(this);
    this.startQuiz = this.startQuiz.bind(this);
  }

  question = { words: [], definition: String, answer: String, score: Number };
  guess: String;
  round = 1;
  successes = 0;
  time = 10;
  started = false;
  counter$: Observable<number>;

  ngOnInit(): void {
    this.round = 1;
    this.guess = "";
    this.counter$ = new Observable<number>();
    this.refreshData();
  }

  startQuiz(): void {
    this.started = true;
    this.counter$ = timer(0, 1000).pipe(
      take(this.time),
      map(() => {
        if (this.time === 1) {
          this.newQuestion();
          return -1;
        }

        return --this.time;
      })
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(QuizDialog, {
      width: "50%",
      height: "35%",
      data: {
        score: this.successes
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.data.changeMessage({ score: this.successes, name: result });
        this.successes = 0;
      }
    });
  }

  newQuestion(): void {
    if (this.round > 9) {
      this.endQuiz();
    } else {
      this.time = 10;
      this.startQuiz();
      ++this.round;
      this.refreshData();
    }
  }

  endQuiz() {
    this.started = false;
    this.openDialog();
    this.ngOnInit();
  }

  refreshData(): void {
    this.http.fetchData().subscribe(data => {
      this.question = JSON.parse(JSON.stringify(data));
    });
    this.guess = "";
  }

  handleClick(event) {
    if (!this.guess) {
      this.guess = event.currentTarget.value;
    } else return;
    //@ts-ignore
    if (this.guess === this.question.answer) {
      this.successes += 1;
    }
    if (this.round > 9) {
      setTimeout(() => {
        this.endQuiz();
      }, 1000);
    } else {
      setTimeout(() => {
        this.newQuestion();
      }, 1000);
    }
  }
}

export interface DialogData {
  score: Number;
  name: String;
}
@Component({
  selector: "quizdialog",
  templateUrl: "quizdialog.html",
  styleUrls: ["words.component.css"]
})
export class QuizDialog {
  constructor(
    public dialogRef: MatDialogRef<QuizDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
