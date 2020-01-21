import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollListener } from '../Helper/ScrollEventHelper';
import { Constants, Animations } from '../service/constants';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
  animations: [
    Animations.ANIM_LEFT
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
