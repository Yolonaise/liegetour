import { OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Constants } from '../service/constants';

export abstract class ScrollListener implements OnInit, OnDestroy {
    oldScrollPos: number;
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

    isOnScreenById(current: string, callback: Function): void {
        return this.isElementOnScreen(document.getElementById(current), callback);
    }
    
    isElementOnScreen(current: Element, callback: Function): void {
        var observer = new IntersectionObserver(function (entries) {
            if (callback) {
                callback(entries[0].isIntersecting);
            }
            observer.disconnect();
        }, { threshold: [0.75] });

        observer.observe(current);
    }
}