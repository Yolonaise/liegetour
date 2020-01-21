import { Component } from '@angular/core';
import { ScrollListener } from '../Helper/ScrollEventHelper';
import { animate, trigger, style, transition } from '@angular/animations'
import { IMenu } from '../interface/menu.interface';
import { Constants } from '../service/constants';
import { MenuService } from '../menu/menu.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('squareItemAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.7s ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 }))
      ]),
    ]),
    trigger('titleItemAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.7s ease-in-out')
      ]),
    ])]
})

export class HomeComponent extends ScrollListener implements IMenu{
  name: string = "Home";
  htmlId: string = uuid.v4();
  isOnScreen: boolean = false;

  opacity: number = 1;
  offset: number = 0;

  constructor(private menu: MenuService) {
    super();
  }

  ngOnInit() {
      super.ngOnInit();
    this.menu.addMenu(this);
  }

  OnScroll(scrollPosition: number): void {
    const diff = (scrollPosition) / (1.5 * Constants.TITLE_TOP_TRIGGER - scrollPosition)
    this.opacity = 1 - diff;
    this.offset = scrollPosition / 7;

    this.isOnScreenById(this.htmlId, (v: string) => {
      if (v && !this.isOnScreen) {
        this.menu.notifyFeatureOnScreen(this);
      }
    });
  }
}
