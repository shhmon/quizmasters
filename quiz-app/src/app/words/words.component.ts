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

  ngOnInit(): void {
    this.http.fetchData().subscribe(data => {
      this.question = JSON.parse(JSON.stringify(data));
    });
    this.guess = "";
  }

  handleClick(event) {
    this.guess = event.currentTarget.value;
    this.round += 1;
    setTimeout(() => {
      this.ngOnInit();
    }, 1000);
  }
}
