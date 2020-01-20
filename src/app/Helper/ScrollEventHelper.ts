import { OnInit, ElementRef, OnDestroy } from '@angular/core';

export abstract class ScrollListener implements OnInit, OnDestroy{

    constructor(protected el: ElementRef) { }

    ngOnInit() {
        window.addEventListener('scroll', this.scroll, true); //third parameter
    }
    
    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }

    private scroll = (event: Event): void => {
        this.OnScroll(event, this.el);
    }

    abstract OnScroll(event: Event, element: ElementRef): void;
}