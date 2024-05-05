---
aliases: 
tags: 
date created: Sunday, May 5th 2024, 7:31:47 pm
date modified: Sunday, May 5th 2024, 7:37:56 pm
---
Em vez de pegar somente um elemento assim como no view child conseguimos fazer uma query e pegarmos todos os components de uma vez. Uma lista de cards por exemplo.

```typescript
import { Component, ViewChildren, QueryList, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements AfterViewInit {
  @ViewChildren('box') boxes: QueryList<ElementRef>;

  ngAfterViewInit() {
    // Acessa a lista de elementos após a inicialização da view
    this.boxes.forEach(box => console.log(box.nativeElement));
  }
}
```

```html
<div> 
	<div #box class="box-style">Box 1</div> 
	<div #box class="box-style">Box 2</div> 
	<div #box class="box-style">Box 3</div> 
</div>
```

Um exemplo de como utilizar os elementos pego na query

```typescript
import { Component, ViewChildren, QueryList, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements AfterViewInit {
  @ViewChildren('box') boxes: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.boxes.forEach(box => {
      this.renderer.listen(box.nativeElement, 'focus', () => this.addBorder(box.nativeElement));
      this.renderer.listen(box.nativeElement, 'blur', () => this.removeBorder(box.nativeElement));
    });
  }

  addBorder(element: HTMLElement) {
    this.renderer.addClass(element, 'focused');
  }

  removeBorder(element: HTMLElement) {
    this.renderer.removeClass(element, 'focused');
  }
}
```

Aqui qualquer elemento que pegar na query podemos dar focusin e focusout e ele receberá uma borda ou irá perder uma borda.

---