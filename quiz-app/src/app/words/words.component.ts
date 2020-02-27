import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { DataServiceService } from "../data-service.service";
import { Observable, timer } from "rxjs";
import { take, map } from "rxjs/operators";

@Component({
  selector: "app-words",
  templateUrl: "./words.component.html",
  styleUrls: ["./words.component.css"]
})
export class WordsComponent implements OnInit {
  constructor(private http: HttpService, private data: DataServiceService) {
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
    this.successes = 0;
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

  newQuestion(): void {
    this.time = 10;
    this.startQuiz();
    ++this.round;
    this.refreshData();
  }

  endQuiz() {
    this.data.changeMessage(this.successes);
    this.started = false;
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
    setTimeout(() => {
      this.newQuestion();
    }, 1000);
    if (this.round === 10) {
      setTimeout(() => {
        this.endQuiz();
      }, 1000);
    }
  }
}
