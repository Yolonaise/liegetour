import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ScrollListener } from '../Helper/ScrollEventHelper';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Constants, Animations } from '../service/constants';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  animations: [
    Animations.ANIM_RIGHT
  ]
})
export class TeamComponent extends ScrollListener {
  titleShow: boolean = false;
  @ViewChild('teamTitle', { static: true }) private teamTitle: ElementRef;

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
    const pos = this.teamTitle.nativeElement.getBoundingClientRect().bottom;

    if (pos < Constants.TITLE_TOP_TRIGGER && pos > Constants.TITLE_BOTTOM_TRIGGER) {
      this.titleShow = true;
    } else {
      this.titleShow = false;
    }
  }
}
