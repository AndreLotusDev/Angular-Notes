---
aliases: 
tags: 
date created: Wednesday, April 24th 2024, 12:29:51 am
date modified: Sunday, May 5th 2024, 7:29:56 pm
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

---

Exemplo de como colocar e tirar borda de um componente filho usando view child

```javascript
<div #boxDiv (mouseover)="addBorder()" (mouseout)="removeBorder()">
    Passe o mouse sobre mim!
</div>
```

```javascript
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exemplo',
  templateUrl: './exemplo.component.html',
  styleUrls: ['./exemplo.component.css']
})
export class ExemploComponent {
  @ViewChild('boxDiv') boxDiv!: ElementRef;

  addBorder(): void {
    this.boxDiv.nativeElement.style.border = '2px solid blue';
  }

  removeBorder(): void {
    this.boxDiv.nativeElement.style.border = 'none';
  }
}
```

```javascript
div {
  padding: 10px;
  transition: border 0.3s ease;
}

```

É importante lembrar que durante o constructor e onInit um viewchild ainda não ´é presente, somente quando terminamos a inicialização completa do componente que ai sim o ViewChild é populado e pode se manusear ele.

Caso você precise utilizar ele logo após ele inicializar é sempre bom chamar o metodo ngAterViewInit(), assim teremos certeza que ele pelo menos inicializou.

---

