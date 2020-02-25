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

	question = {words:[], definition:String, answer:String, score:Number}
	guess : String;
  round = 1;

  ngOnInit(): void {
      this.http.fetchData().subscribe(data => {
				this.question = JSON.parse(JSON.stringify(data));
      })
    }


  handleClick(event){
<<<<<<< HEAD
		this.guess = event.currentTarget.value;
    this.round+=1;
=======
		if (!this.guess) {
			this.guess = event.currentTarget.value;
		}
>>>>>>> 86ce463442cf98c4a8ca0b6d4aef3e8fd9ff3e5f
  }

}
