---
aliases: 
tags: 
date created: Thursday, May 23rd 2024, 6:42:06 pm
date modified: Thursday, May 23rd 2024, 6:46:02 pm
---
O angular prove por meio de seu framework suporte a mais recente API dos navegadores que são os custom elements, ou seja, caso você trabalhe em um projeto grande, um CMS, ou quer dinamicamente usar diferentes browsers isso pode set possível com essa feature, com ela podemos usar tag customizadas que não dependem somente de um framework.

Exemplo:

- Primeiro instale o pacote do custom elements no angular: npm install @angular/elements

Depois crie esse elemento customizado:

```typescript
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';

@NgModule({
  declarations: [
    MeuComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [MeuComponenteComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(MeuComponenteComponent, { injector: this.injector });
    customElements.define('meu-componente', el);
  }
}
```

Depois voce pode simplesmente usar esse componente custom em seu HTML

```html
<script src="runtime.js"></script>
<script src="polyfills.js"></script>
<script src="scripts.js"></script>
<script src="main.js"></script>
<meu-componente></meu-componente>
```

---