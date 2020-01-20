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
        animate('0.5s ease-in', style({transform: 'translateX(0%)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(100%)', opacity:1}),
        animate('0.5s ease-in',  style({transform: 'translateX(-100%)', opacity: 1}))
      ]),
  ]),
  trigger('titleItemAnimation', [
    transition(':enter', [
      style({transform: 'translateX(-100%)', opacity: 0}),
      animate('0.5s 0.3s ease-in')
    ]),
    transition(':leave', [
      style({transform: 'translateX(100%)', opacity:1}),
      animate('0.5s 0.3s ease-in',  style({transform: 'translateX(-100%)', opacity: 1}))
    ]),
  ])]
})

export class HomeComponent extends ScrollListener {
  opacity: number = 1;
  offset: number = 0;
  constructor(protected el: ElementRef) {
    super(el);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  OnScroll(event: Event, element: ElementRef<any>): void {
    const componentPosition = element.nativeElement.parentNode.offsetHeight;
    const scrollPosition = window.pageYOffset;

    const diff = (scrollPosition) /(2 * componentPosition - scrollPosition)
    this.opacity = 1 - diff;
    this.offset = scrollPosition / 7;
  }
}
