import { trigger, state, style, transition, animate } from '@angular/animations';

export class Constants {
    static TITLE_TOP_TRIGGER: number;
    static TITLE_BOTTOM_TRIGGER: number;
}

export class Animations {
    static ANIM_LEFT =
        trigger('AnimLeft', [
            state('showed', style({
                transform: 'translate(0)',
                opacity: 1
            })),
            state('hidden', style({
                transform: 'translate(-100%)',
                opacity: 0
            })),
            transition('showed => hidden', [
                animate('0.35s ease-out')
            ]),
            transition('hidden => showed', [
                animate('0.35s ease-out')
            ]),
        ]);

    static ANIM_RIGHT =
        trigger('AnimRight', [
            state('showed', style({
                transform: 'translate(0)',
                opacity: 1
            })),
            state('hidden', style({
                transform: 'translate(100%)',
                opacity: 0
            })),
            transition('showed => hidden', [
                animate('0.35s ease-out')
            ]),
            transition('hidden => showed', [
                animate('0.35s ease-out')
            ]),
        ]);
}

export default class Dictionnary {
    static constants: Constants;
    static animations: Animations;
}
