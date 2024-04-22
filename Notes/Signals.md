---
aliases: 
tags: 
date created: Sunday, April 21st 2024, 11:47:40 pm
date modified: Sunday, April 21st 2024, 11:51:54 pm
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