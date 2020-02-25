import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../data-service.service"

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.css'],
  template: `<app-words>(messageEvent)="receiveMessage($event)" </app-words>`
})
export class HighscoresComponent implements OnInit {

  constructor(private data: DataServiceService) { }

  message: any;

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message=message);
  }

}
