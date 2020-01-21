import { OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Constants } from '../service/constants';

export abstract class ScrollListener implements OnInit, OnDestroy {
    private oldScrollPos: number;
    constructor() { }

    ngOnInit() {
        this.oldScrollPos = 0;

        Constants.TITLE_TOP_TRIGGER = window.innerHeight;
        Constants.TITLE_BOTTOM_TRIGGER = 0;

        window.addEventListener('scroll', this.scroll, true);
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }

    private scroll = (event: Event): void => {
        this.OnScroll(window.pageYOffset, window.pageYOffset > this.oldScrollPos);
        this.oldScrollPos = window.pageYOffset;
    }

    abstract OnScroll(scrollPosition: number, down: boolean): void;
}