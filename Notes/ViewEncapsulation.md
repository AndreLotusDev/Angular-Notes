---
aliases: 
tags: 
date created: Wednesday, May 15th 2024, 9:03:49 pm
date modified: Wednesday, May 15th 2024, 9:08:32 pm
---
No angular temos a emulação de classes que só existem em tempo de runtime, isso é util por criamos ambientes controlados de estilização, todavia você pode configurar isso manualmente e escolher diferentes tipos de approaches.

Exemplo de como configurar o ViewEncapsulation:

```typescript
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-custom-component',
  template: `
    <h1>Bem-vindo ao meu componente!</h1>
  `,
  styles: [`
    h1 {
      color: red;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated // Modifique conforme necessário
})
export class MyCustomComponent {}
```

Temos três modos de viewencapsulations:

- Emulated (Padrão) -> É o default que o angular onde ele encapsulo os estilos e else so funcionam dentro do componente e não vazam pra outros components, para isso ele cria classes dentro de tags HTML dinamicamente.
- None -> Não há encapsulamento, portanto estilos configurados dentro desse componente vazam para um estilo global que por final podem set aplicados a outros components.
- ShadowDom -> Usa a tecnologia Shadow DOM nativa do navegador para encapsular estilos e o DOM do componente. Estilos definidos no componente não afetam o resto da aplicação e vice-versa, oferecendo o maior isolamento possível.
	- OBS: essa á um API nova, portanto pode não set compatível com versões mais antigas e browsers mais desatualizados.

---