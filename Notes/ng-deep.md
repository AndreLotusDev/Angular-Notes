---
aliases: 
tags: 
date created: Wednesday, May 15th 2024, 8:42:30 pm
date modified: Wednesday, May 15th 2024, 8:48:15 pm
---
O ng-deep permite que dentro de um componente pai estilizamos coisas que esteja dentro de um componente filho.

Exemplo:

```typescript
@Component({
  selector: 'my-parent-component',
  template: `
    <div>
      <my-child-component></my-child-component>
    </div>
  `,
  styles: [`
    :host ::ng-deep my-child-component {
      border: 2px solid blue;
      padding: 10px;
    }
  `]
})
export class MyParentComponent {}
```

Por mais que o ::ng-deep seja util para estilização, deve se tomar alguns cuidados, como:

- O ng-deep cria estilos globais, portanto se atente se ela acompanha o seletor :host em conjunto
- Existem melhores maneiras de se estilizar components filhos dentro de um componente  pai, por exemplo por parametros de input (inclusive a biblioteca do material é um bom exemplo disso)
- o ng-deep futuramente será deprecado, portanto já deve estar preparado para abordagens que se livrem dele.