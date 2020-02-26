import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "../data-service.service";

const ELEMENT_DATA: PeriodicElement[] = [
  {score: 8, time: 11.45, date: '20.02.26'},

];

@Component({
  selector: "app-highscores",
  templateUrl: "./highscores.component.html",
  styleUrls: ["./highscores.component.css"]
})
export class HighscoresComponent implements OnInit {
  constructor(private data: DataServiceService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => {
      window.localStorage.setItem("scores", JSON.stringify(message));
    });
    console.log(window.localStorage.getItem("scores"));
  }

  displayedColumns: string[] = ['score', 'time', 'date'];
  dataSource = ELEMENT_DATA;

}
