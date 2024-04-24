---
aliases: 
tags: 
date created: Wednesday, April 24th 2024, 12:29:51 am
date modified: Wednesday, April 24th 2024, 12:30:51 am
---
O viewchild é muito importante pois muitas coisas não conseguimos fazer diretamente com angular, ai com o viewchild conseguimos alterar esses elementos da DOM usando raw javascript + dom.

Nesse exemplo abaixo, após carregar o componente ele recebe o devido foco.
```javascript
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<input #myInput type="text" value="Digite aqui">`
})
export class AppComponent {
  @ViewChild('myInput') myInput: ElementRef;

  ngAfterViewInit() {
    this.myInput.nativeElement.focus(); // Foca automaticamente no input após o carregamento do componente
  }
}
```