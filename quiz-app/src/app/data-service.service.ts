import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  private messageSource = new BehaviorSubject<any>('');
  currentMessage = this.messageSource.asObservable();

   changeMessage(message: any) {
       this.messageSource.next(message)
   }

}
