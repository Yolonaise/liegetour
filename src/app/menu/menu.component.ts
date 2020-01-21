import { Component, Injectable } from '@angular/core';
import { ScrollListener } from '../Helper/ScrollEventHelper';
import { Constants, Animations } from '../service/constants';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    Animations.MENU_LINE
  ]
})
export class MenuComponent extends ScrollListener {
  navBarOpacity: number = 0;
 
  constructor(protected service: MenuService) {
    super();
  }

  ngOnInit() { 
    super.ngOnInit();
    this.service.register(this);
  }

  OnScroll(scrollPosition: number): void {
    const diff = (scrollPosition) / (Constants.TITLE_TOP_TRIGGER);
    this.navBarOpacity =  diff * 2.2 - 1;
  }

  scrollTo(id: string) {
    console.log(id);
    const element = document.getElementById(id);
    if (element === undefined)
      return;

    element.scrollIntoView({ behavior: 'smooth', block: "start" });
  }
}
