---
aliases: 
tags: 
date created: Monday, May 13th 2024, 10:42:48 pm
date modified: Monday, May 13th 2024, 11:43:13 pm
---
O host binding serve para attachar dentro de uma variavel do componente propriedades da dom, isso pode set muito útil combando com o host listener, onde baseado em eventos podemos alterar propriedades de estilo da DOM por exemplo.

Exemplo:

```javascript
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private isActive: boolean = false;

  @Input() set appHighlight(value: boolean) {
    this.isActive = value;
    this.updateHost();
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('class.active') activeClass: boolean;
  @HostBinding('attr.disabled') disabledAttribute: string;

  private updateHost() {
    this.backgroundColor = this.isActive ? 'yellow' : 'transparent';
    this.activeClass = this.isActive;
    this.disabledAttribute = this.isActive ? 'disabled' : null;
  }
}
```

```html
<button [appHighlight]="isActive" (click)="isActive = !isActive">Clique-me!</button>
```

Nesse exemplo quando clicamos no botão desativamos todos esses atributos

---