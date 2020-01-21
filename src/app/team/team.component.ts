import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ScrollListener } from '../Helper/ScrollEventHelper';
import { trigger, transition, style, animate, state } from '@angular/animations';
import Constants from '../service/constants';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  animations: [
    trigger('titleAnim2', [
      state('showed', style({
        transform: 'translate(0)',
        opacity: 1
      })),
      state('hidden', style({
        transform: 'translate(100%)',
        opacity: 0
      })),
      transition('showed => hidden', [
        animate('0.35s')
      ]),
      transition('hidden => showed', [
        animate('0.35s')
      ]),
    ])
  ]
})
export class TeamComponent extends ScrollListener {
  titleShow: boolean = false;
  @ViewChild('teamTitle', { static: true }) private teamTitle: ElementRef;

  constructor(protected element: ElementRef) {
    super()
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  OnScroll(scrollPosition: number): void {
    const pos = this.teamTitle.nativeElement.getBoundingClientRect().bottom;

    if (pos < Constants.TITLE_TOP_TRIGGER && pos > Constants.TITLE_BOTTOM_TRIGGER) {
      this.titleShow = true;
    } else {
      this.titleShow = false;
    }
  }
}
