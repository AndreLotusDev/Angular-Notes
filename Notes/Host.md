---
aliases: 
tags: 
date created: Wednesday, May 15th 2024, 8:36:52 pm
date modified: Wednesday, May 15th 2024, 8:42:21 pm
---
O elemento :host nos ajuda a stylizar o componente em si.

Pois se você for parar pra pensar, não há como stylizar o próprio componente utilizando seletores de CSS dentro de um arquivo de .CSS dentro dele mesmo.

Aqui está um exemplo de como utilizar.

Por exemplo, vamos supor que você tem um componente chamado MyComponent, e voce quer estilizar ele, você pode resolver esse problema com:

```typescript
@Component({
  selector: 'my-component',
  template: `
    <div>
      Olá, mundo!
    </div>
  `,
  styles: [`
    :host {
      display: block;
      background-color: red;
      padding: 20px;
    }
  `]
})
export class MyComponent {}
```

---

Sem o host esse approach não seria tão fácil assim.