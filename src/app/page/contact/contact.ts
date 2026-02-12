import { Component } from '@angular/core';

interface Visitors{
  name : String;
  email : String;
  description : String;
}

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  visitors : Visitors = {
    name : '',
    email : '',
    description : ''
  }

  vistorsList : Visitors[] = [];

  sendMsg(){
    this.vistorsList.push(this.visitors);
    this.visitors = {
      name : '',
      email : '',
      description : ''
    };
  }
}
