import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { wordDefenition } from './wordDefenition';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  constructor(private http: HttpService){}

  words = {words:[], defenition:String, answer:String, score:Number}

  ngOnInit(): void {
      this.http.fetchData().subscribe(data => {
        this.words = JSON.parse(JSON.stringify(data));
        console.log(typeof(this.words));
      })
    }




  handleClick(event){

  }

}
