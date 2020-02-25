import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-words",
  templateUrl: "./words.component.html",
  styleUrls: ["./words.component.css"]
})
export class WordsComponent implements OnInit {
  constructor(private http: HttpService) {
    this.handleClick = this.handleClick.bind(this);
  }

  question = { words: [], definition: String, answer: String, score: Number };
  guess: String;
  round = 1;
  successes = 0;

  ngOnInit(): void {
    this.http.fetchData().subscribe(data => {
      this.question = JSON.parse(JSON.stringify(data));
    });
    this.guess = "";
  }

  handleClick(event) {
    if (this.round < 10) {
      if (!this.guess) {
        this.guess = event.currentTarget.value;
      } else return;
      if (this.guess === this.question.answer) {
        this.successes += 1;
      }
      this.round += 1;
      setTimeout(() => {
        this.ngOnInit();
      }, 1000);
    } else {
      //routa till highscore
      //skicka score till localstore
      this.round = 1;
      this.successes = 0;
      this.guess = "";
    }
  }
}
