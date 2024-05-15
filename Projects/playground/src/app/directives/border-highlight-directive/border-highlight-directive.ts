import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[borderHighlightDirective]',
  exportAs: 'bhd'
})
export class BorderHighlightDirectiveDirective implements OnInit {

  @HostListener('mouseenter') onMouseEnter() {
    this.border = '5px solid yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.border = '5px solid transparent';
  }

  @HostBinding('style.border') get setBorder() {
    return this.border
  }
  private border!: string

  public toggle() {
    this.border = this.border === '5px solid yellow' ? '5px solid transparent' : '5px solid yellow'
  }

  constructor() { }

  ngOnInit() {
  }

}
