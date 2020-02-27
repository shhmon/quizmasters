import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-highscores",
  templateUrl: "./highscores.component.html",
  styleUrls: ["./highscores.component.css"]
})
export class HighscoresComponent implements OnInit {
  constructor() {}
  displayedColumns: string[] = ["score", "name", "time", "date"];
  dataSource = new MatTableDataSource(
    JSON.parse(window.localStorage.getItem("scores"))
  );

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}
