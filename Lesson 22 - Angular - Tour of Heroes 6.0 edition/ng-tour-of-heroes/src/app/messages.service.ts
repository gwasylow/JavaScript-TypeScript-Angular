import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  public messages : string[] = [];

  constructor() { }
  
  public Add(msg : string) : void {
    this.messages.push(msg);
  }

  public Clear() : void {
    this.messages = [];
  }

}

