import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hoverHighlight]',
})
export class HoverHighlightDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this._renderer.addClass(this._ref.nativeElement, 'highlight');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._renderer.removeClass(this._ref.nativeElement, 'highlight');
  }

  constructor(private _ref: ElementRef, private _renderer: Renderer2) {

  }
}
