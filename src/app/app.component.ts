import { Component, OnInit, ElementRef } from '@angular/core';
import { ScrollListener } from './Helper/ScrollEventHelper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent extends ScrollListener  {
  title = 'liege-tour';
  start: number;
  offset: number;

  constructor (private element: ElementRef) {
    super(element);
    this.offset = element.nativeElement.parentNode.offsetHeight;
    this.start = this.offset;
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  OnScroll(event: Event, element: ElementRef<any>): void {
    const scrollPosition = window.pageYOffset;

    if(scrollPosition < (this.start)) {
      this.offset = this.start - (scrollPosition * 1.15);
    }
  }
}
