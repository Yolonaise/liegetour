import { Injectable } from '@angular/core';
import { MenuComponent } from './menu.component';
import { IMenu } from '../interface/menu.interface';

@Injectable()
export class MenuService {
    public container: MenuComponent;
    public menus: IMenu[] = [];

    constructor() {}

    register(container: MenuComponent) {
        if(container) 
            this.container = container;
    }

    addMenu(menu: IMenu) {
        if(menu)
            this.menus.push(menu);
    }

    scrollTo(htmlId: string) {
        this.container.scrollTo(htmlId);
    }

    notifyFeatureOnScreen(menu: IMenu) {
        this.menus.forEach(m => {
            m.isOnScreen = menu.htmlId === m.htmlId;
        });
    }
} 