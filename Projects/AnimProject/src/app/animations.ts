import { animate, state, style, transition, trigger } from "@angular/animations";

export class HighlighTrigger {
    static trigger = trigger('highlight', [
        state(
            'default',
            style({
                border: '2px solid black',
            })
        ),
        state(
            'highlighted',
            style({
                border: '3px dashed red',
            })
        ),
        transition('default => highlighted', [
            animate('200ms ease-out', style({ transform: 'scale(1)' })),
        ]),
        transition('highlighted => default', [
            animate('200ms ease-out', style({ transform: 'scale(0.85)' })),
        ]),
    ])
}

export class FormTrigger {
    static trigger = trigger('shownState', [
        transition(':enter', [
            style({
                opacity: 0
            }),
            animate('1000ms ease-out', style({
                opacity: 1
            }))
        ]),
        transition(':leave', [
            animate('200ms ease-out', style({
                opacity: 0
            }))
        ])
    ])
}

export class CheckButtonTrigger {
    static trigger = trigger('checkButton', [
        transition('* => checked', [
            animate('400ms ease-in', style({
                transform: 'scale(0.4)'
            }))
        ])
    ])
}