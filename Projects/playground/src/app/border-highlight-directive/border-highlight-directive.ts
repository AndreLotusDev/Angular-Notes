import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[borderHighlightDirective]',
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

  @HostBinding('class') get setClass() {
    return this.class
  } 
  
  @Input()class!: string

  constructor() { }

  ngOnInit() {
  }

}
