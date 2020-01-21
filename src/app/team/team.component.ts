import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollListener } from '../Helper/ScrollEventHelper';
import { Constants, Animations } from '../service/constants';
import { IMenu } from '../interface/menu.interface';
import { MenuService } from '../menu/menu.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  animations: [
    Animations.ANIM_RIGHT
  ]
})
export class TeamComponent extends ScrollListener implements IMenu {
  name: string = "Team";
  htmlId: string = uuid.v4();
  isOnScreen: boolean = false;

  titleShow: boolean = false;
  @ViewChild('teamTitle', { static: true }) private teamTitle: ElementRef;

  constructor(private menu: MenuService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.menu.addMenu(this);
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

    this.isOnScreenById(this.htmlId, (v: string) => {
      if (v && !this.isOnScreen) {
        this.menu.notifyFeatureOnScreen(this);
      }
    });
  }
}
