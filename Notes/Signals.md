---
aliases: 
tags: 
date created: Sunday, April 21st 2024, 11:47:40 pm
date modified: Saturday, June 22nd 2024, 10:44:06 am
---
Como usar signal e computed

```javascript
import { Component } from '@angular/core';
import { signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <h1>Current Count: {{ count() }}</h1>
      <h2>Double Count: {{ doubleCount() }}</h2>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
    </div>
  `,
})
export class CounterComponent {
  private count = signal(0);
  private doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count(this.count() + 1);
  }

  decrement() {
    this.count(this.count() - 1);
  }
}
```

Perceba que o count ao set injetado no front ele ja vai set reativo e observar as alterações em tempo real

E perceba também a propriedade computed, é a mesma coisa que signal, so que nela podemos set reativos e notar alterações nela quando alguem dentro da expressão sofre alteração, portanto toda vez que count mudar o doubleCount também ira imitir uma alteração

Podemos fazer isso que fizemos acima com o modo standlone:

count.component.ts
```javascript
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],  // Importa CommonModule se precisar de diretivas como ngIf, ngFor, etc.
  template: `
    <div>
      <h1>Current Count: {{ count() }}</h1>
      <h2>Double Count: {{ doubleCount() }}</h2>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
    </div>
  `,
})
export class CounterComponent {
  private count = signal(0);
  private doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count(this.count() + 1);
  }

  decrement() {
    this.count(this.count() - 1);
  }
}
```

app.component.ts
```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-counter></app-counter>
  `,
  standalone: true,
  imports: [CounterComponent]  // Importando o CounterComponent standalone
})
export class AppComponent {}
```

---

Quando estamos trabalhando com signal devemos ter cuidado, ele so faz sentido caso mudemos a estrategia e mecanismo de observabilidade do angular, porque se não muitas das vezes acabamos por achar que estamos usando o poder do signal sendo que o angular por debaixo dos panos está cuidando da mudança de estados com sua configuração vanillar, outra coisa que devemos ficar ciente é que não mudamos diretamente o objeto, mas sim devemos chamar uma função ao qual alteramos o estado do objeto embrulhado pelo signal.

---

Por default effects e signals são limpos automaticamente pelo angular, somente no RXJS as subscriptions que tem que set limpas manualmente.

---

# Input

Também modificamos o input, em vez de chamar:

@Input()
inputDoTipoString = '';

Agora podemos optar por fazer assim agora:

label = input('');

por inferencia o singal do angular vai entender que você está utilizando uma string e vai tipar por inferencia para você.

Dentro do signal também podemos obrigar o usuário a informar um parametro lá de fora.

como:

label = input.required();

---

É interessante observar que o angular mesmo com novas features ele tenta a medida do possível manter retrocompatibilidade, ou seja, é possível fazer a mesma coisa assim:

@Input({required: true}) label = '';

É possível também aplicar transformações no input, por exemplo:

@Input({required: true, transform: value => value.toUpperCase()}) 
label = '';

outro exemplo é transformar o input string em booleano, por exemplo:

@Input({required: true, transform: (value: string) => value === 'true'})
estaAtivado = true;

---

Há também um novo modo de se chamar o output, por exemplo:

//Modo antigo
@Output() estaAtivadoChange = new EventEmitter<boolean>();

//Modo novo
botaoClicado = output<boolean>();



