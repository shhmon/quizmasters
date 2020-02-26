import { Component } from "@angular/core";
import { DataServiceService } from "./data-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "quiz-app";

  constructor(private data: DataServiceService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => {
      if (!localStorage.getItem("scores")) {
        localStorage.setItem("scores", JSON.stringify([]));
      }

      if (message !== "") {
        let timeDate = new Date();
        let scoreObject = {
          score: message,
          time: timeDate.toLocaleTimeString("en-US"),
          date: timeDate.toLocaleDateString("en-US")
        };
        const scores = JSON.parse(localStorage.getItem("scores"));
        localStorage.setItem(
          "scores",
          JSON.stringify([...scores, scoreObject])
        );
      }
    });
  }
}
