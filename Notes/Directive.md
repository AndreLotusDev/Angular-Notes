---
aliases: 
tags: 
date created: Monday, May 13th 2024, 10:40:02 pm
date modified: Tuesday, May 14th 2024, 11:22:44 pm
---
É possível usar uma tag chamada export as

```typescript
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
```

```html
<p hoverHighlight>This is a paragraph of text</p>

  

<hr/>

  

<p borderHighlightDirective #border="bhd">This is a second paragraph of text</p>

  

<button (dblclick)="border.toggle()">Double click me!</button>
```

Perceba que com ela podemos acessar elementos programaticamente e chamar as funções que a dentro do componente, muito útil.

---

O simbolo * em conjunto com a keyword por exemplo ngIf forma o (*ngIf*) e por debaixo dos panos no final o que ele faz é:

```javascript
<ng-template [ngIf]="isEmpty" let-isEmpty>
</ng-template>
```

Ele desembrulha por meio de uma syntax sugar algo simples para algo mais complexo, poupando assim o tempo do desenvolvedor.

---

