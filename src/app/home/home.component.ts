import { Component, ElementRef } from '@angular/core';
import { ScrollListener } from '../Helper/ScrollEventHelper';
import { animate, trigger, style, group, query, transition, state, stagger } from '@angular/animations'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('squareItemAnimation', [
      transition(':enter', [
        style({transform: 'translateX(-100%)', opacity: 0}),
        animate('0.5s ease-out', style({transform: 'translateX(0%)', opacity: 1}))
      ]),
  ]),
  trigger('titleItemAnimation', [
    transition(':enter', [
      style({transform: 'translateX(-100%)', opacity: 0}),
      animate('0.7s 0.3s ease-out')
    ]),
  ])]
})

export class HomeComponent extends ScrollListener {
  opacity: number = 1;
  offset: number = 0;
  constructor(protected element: ElementRef) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  OnScroll(scrollPosition: number): void {
    const componentPosition = this.element.nativeElement.parentNode.offsetHeight;
    const diff = (scrollPosition) /(1.5 * componentPosition - scrollPosition)
    this.opacity = 1 - diff;
    this.offset = scrollPosition / 7;
  }
}
