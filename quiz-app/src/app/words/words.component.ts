import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  constructor(private http: HttpService){
    this.handleClick = this.handleClick.bind(this);
  }

  words = {words:[], definition:String, answer:String, score:Number}

  ngOnInit(): void {
      this.http.fetchData().subscribe(data => {
        this.words = JSON.parse(JSON.stringify(data));
      })
    }


  handleClick(event){
    
    if(event.currentTarget.value === this.words.answer){
      
      return true;
    }
    
    return false;
  }

}
