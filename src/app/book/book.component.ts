import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ScrollListener } from '../Helper/ScrollEventHelper';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Constants, Animations } from '../service/constants';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  animations: [
    Animations.ANIM_LEFT
  ]
})
export class BookComponent extends ScrollListener {
  titleShow: boolean = false;
  @ViewChild('bookTitle', { static: true }) private bookTitle: ElementRef;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  OnScroll(_: number): void {
    const pos = this.bookTitle.nativeElement.getBoundingClientRect().bottom;

    if (pos < Constants.TITLE_TOP_TRIGGER && pos > Constants.TITLE_BOTTOM_TRIGGER) {
      this.titleShow = true;
    } else {
      this.titleShow = false;
    }
  }
}
