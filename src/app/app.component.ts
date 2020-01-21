import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ScrollListener } from './Helper/ScrollEventHelper';
import { Constants } from './service/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'liege-tour';

  constructor () { }
}
