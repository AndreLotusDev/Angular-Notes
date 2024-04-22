import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[changeColor]'
})
export class ChangeColorDirective {

    constructor(private eleRef: ElementRef) {
        
    }

    @HostListener('click') onClick() {
        console.log('Atual: ' + this.eleRef.nativeElement.style.color);
        let isActualBlue = this.eleRef.nativeElement.style.color === 'blue';

        this.eleRef.nativeElement.style.color = isActualBlue ? 'red' : 'blue';
    }

    @HostListener('mouseover') onMouseOver() {
        //border black
        console.log('hit');
        this.eleRef.nativeElement.style.border = '2px solid black';
    }
}