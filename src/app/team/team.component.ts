import { Component, OnInit, ElementRef } from '@angular/core';
import { ScrollListener } from '../Helper/ScrollEventHelper';
import { trigger, transition, style, animate, state} from '@angular/animations';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  animations:[
    trigger('titleAnim2', [
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
export class TeamComponent extends ScrollListener {
  titleShow: boolean = false;

  constructor(protected element: ElementRef) {
    super(element)
   }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy(){
    super.ngOnDestroy();
  }

  OnScroll(event: Event, element: ElementRef): void {
    const componentPosition = this.element.nativeElement.parentNode.offsetHeight;
    const scrollPosition = window.pageYOffset;

    if(scrollPosition >  componentPosition - componentPosition * 0.2) {
      this.titleShow = true;
    }
    else {
      this.titleShow = false;
    }
  }
}
