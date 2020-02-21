import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  fetchData(){
    return this.http.get('http://localhost:5000/').subscribe(data =>{
      console.log(data)
    });
  }
}
