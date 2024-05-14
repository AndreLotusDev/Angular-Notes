---
aliases: 
tags: 
date created: Monday, May 13th 2024, 10:59:29 pm
date modified: Monday, May 13th 2024, 11:46:19 pm
---
O hostlistener permite que possamos escutar eventos da dom e transformar em código inteligivel do angular.

Nesse exemplo misturamos o conceito de host binding e host listener ao mesmo tempo para que possamos aumentar a opacidade ao longo do tempo a partir da quantidade de cliques que o usuário fornecer:

```javascript
import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appClickableHighlight]'
})
export class ClickableHighlightDirective {
  private clickCount = 0;

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.opacity') opacity: string;
  @HostBinding('class.highlighted') isHighlighted: boolean = false;

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    this.clickCount++;
    this.isHighlighted = true;
    this.updateStyles();
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    this.isHighlighted = false;
    this.updateStyles();
  }

  private updateStyles() {
    this.backgroundColor = this.isHighlighted ? 'blue' : 'transparent';
    this.opacity = `${Math.min(1, 0.5 + 0.1 * this.clickCount)}`;
  }
}
```

```html
<button appClickableHighlight>Clique em mim</button>
```

Perceba que se utilizarmos ao mesmo tempo o host listener e host binding temos uma ferramenta muito poderosa.

---
