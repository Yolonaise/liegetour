import { Component, ElementRef } from '@angular/core';
import { ScrollListener } from '../Helper/ScrollEventHelper';
import { trigger, transition, style, animate, state} from '@angular/animations';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
  animations:[
    trigger('titleAnim', [
      state('showed', style({
        transform: 'translate(0)',
        opacity: 1
      })),
      state('hidden', style({
        transform: 'translate(-100%)',
        opacity: 0
      })),
      transition('showed => hidden', [
        animate('0.35s')
      ]),
      transition('hidden => showed', [
        animate('0.35s')
      ]),
    ])
  ]
})
export class DiscoverComponent extends ScrollListener {
  titleShow: boolean = false;
  constructor(protected element: ElementRef) {
    super(element);
   }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  OnScroll(event: Event, element: ElementRef): void { 
    const componentPosition = element.nativeElement.parentNode.offsetHeight;
    const scrollPosition = window.pageYOffset;
    if(scrollPosition >  componentPosition - componentPosition * 0.2) {
      this.titleShow = true;
    }
    else {
      this.titleShow = false;
    }
  }
}
