import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollListener } from '../Helper/ScrollEventHelper';
import { Constants, Animations } from '../service/constants';
import { MenuService } from '../menu/menu.service';
import { IMenu } from '../interface/menu.interface';
import * as uuid from 'uuid';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
  animations: [
    Animations.ANIM_LEFT
  ]
})
export class DiscoverComponent extends ScrollListener implements IMenu {
  name: string = "Discover";
  htmlId: string = uuid.v4();
  isOnScreen: boolean = false;
  titleShow: boolean = false;
  @ViewChild('discoTitle', { static: true }) private discoTitle: ElementRef;

  constructor(private menu: MenuService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.menu.addMenu(this);
  }

  OnScroll(scrollPosition: number, down: true): void {
    const pos = this.discoTitle.nativeElement.getBoundingClientRect().bottom;

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
