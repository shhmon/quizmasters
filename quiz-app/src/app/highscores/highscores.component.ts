import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-highscores",
  templateUrl: "./highscores.component.html",
  styleUrls: ["./highscores.component.css"]
})
export class HighscoresComponent implements OnInit {
  constructor() {}
  displayedColumns: string[] = ["score", "time", "date"];
  dataSource = JSON.parse(window.localStorage.getItem("scores"));
}
