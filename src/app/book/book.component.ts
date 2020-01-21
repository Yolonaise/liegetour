import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollListener } from '../Helper/ScrollEventHelper';
import { Constants, Animations } from '../service/constants';
import { IMenu } from '../interface/menu.interface';
import { MenuService } from '../menu/menu.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  animations: [
    Animations.ANIM_LEFT
  ]
})
export class BookComponent extends ScrollListener implements IMenu {
  name: string = "Book";
  htmlId: string = uuid.v4();
  isOnScreen: boolean = false;

  titleShow: boolean = false;
  @ViewChild('bookTitle', { static: true }) private bookTitle: ElementRef;

  constructor(private menu: MenuService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.menu.addMenu(this);
  }

  OnScroll(_: number): void {
    const pos = this.bookTitle.nativeElement.getBoundingClientRect().bottom;

    if (pos < Constants.TITLE_TOP_TRIGGER && pos > Constants.TITLE_BOTTOM_TRIGGER) {
      this.titleShow = true;
    } else {
      this.titleShow = false;
    }

    this.isOnScreenById(this.htmlId, (v: string) => {
      if (v && !this.isOnScreen) {
        this.menu.notifyFeatureOnScreen(this);
      }
    });
  }
}
