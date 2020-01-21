import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollListener } from '../Helper/ScrollEventHelper';
import { trigger, transition, style, animate, state } from '@angular/animations';
import Constants from '../service/constants';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
  animations: [
    trigger('titleAnim', [
      state('showed', style({
        transform: 'translate(0)',
        opacity: 1
      })),
      state('hidden', style({
        transform: 'translate(-100%)',
        opacity: 0
      })),
      transition('showed => hidden', [
        animate('0.35s ease-out')
      ]),
      transition('hidden => showed', [
        animate('0.35s ease-out')
      ]),
    ])
  ]
})
export class DiscoverComponent extends ScrollListener {
  titleShow: boolean = false;
  @ViewChild('discoTitle', { static: true }) private discoTitle: ElementRef;

  constructor(protected element: ElementRef) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  OnScroll(scrollPosition: number, down: true): void {
    const pos = this.discoTitle.nativeElement.getBoundingClientRect().bottom;

    if (pos < Constants.TITLE_TOP_TRIGGER && pos > Constants.TITLE_BOTTOM_TRIGGER) {
      this.titleShow = true;
    } else {
      this.titleShow = false;
    }
  }
}
