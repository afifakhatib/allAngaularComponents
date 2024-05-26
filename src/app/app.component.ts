import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstAngularProject';
}

export interface Iplayers {
  fname: string;
  lname: string;
  nickname: string;
  number: number;
}
