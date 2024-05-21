---
aliases: 
tags: 
date created: Sunday, May 19th 2024, 11:16:18 pm
date modified: Monday, May 20th 2024, 12:14:44 am
---
Por default o angular tem o change detection, ao qual é responsável por detectar mudanças no estado da aplicação e assim por conseguinte atualizar a UI.

Quando as aplicações nascem, por default essa estrategia é sempre implementada por padrão e não há necessidade de mudar, todavia ela pode causar alguns problemas conform a aplicação ir crescendo, isso se dá pois ela faz validação de eventos, validações de inputs, de properties em todos components e fica escutando tudo isso ao mesmo tempo para poder aplicar atualizações de UI, aplicações de longa data com muitos componente e principalmente componente pesados ou com uma grande quantidade de interações entre si podem causar e onerar a performance em geral.

*Para se evitar isso podemos usar algumas outras estagias, e uma dela é a onPush*

Quando você configura um componente para usar a estratégia `OnPush`, o Angular só verificará e renderizará o componente nas seguintes condições:

1. **Entradas do Componente**: Se algum dos `@Input()` properties do componente é atualizado com um novo valor. Importante notar que a verificação só ocorre se o valor for uma referência nova, não apenas uma mutação de um objeto ou array existente.
    
2. **Eventos Originados no Componente**: Se eventos são disparados a partir do próprio componente, como cliques em botões ou subscrições de eventos internos.
    
3. **Observáveis**: Se você estiver usando `AsyncPipe` em seus templates e o observável emitir um novo valor.
    
4. **Detecção Manual**: Se você explicitamente solicitar uma verificação de mudanças usando `ChangeDetectorRef.detectChanges()` ou `ChangeDetectorRef.markForCheck()`.

Ao fazer isso, você irá garantir que sua aplicação ficará mais performática, todavia isso pode introduzir bugs ou necessidade manual de ficar validando esses meios de mudança de UI, então é um trade off que é importante salientar entre os pros e contras.

---

Caso você esteja usando array ou objetos e tenha escolhido a estrategia onPush, voce pode fazer isso para garantir que a UI será atualizada normalmente ao mudar um valor de um array ou objeto que fica dentro de outro componente.

Arrays:

```typescript
@Component({
  selector: 'app-my-component',
  template: `<!-- template here -->`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponent {
  @Input() items: any[];

  addItem(newItem: any) {
    this.items = [...this.items, newItem]; 
  }

  removeItem(index: number) {
    this.items = this.items.filter((item, i) => i !== index);
  }
}
```

Objetos:

```typescript
@Component({
  selector: 'app-my-component',
  template: `<!-- template here -->`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponent {
  @Input() config: any;

  updateConfig(newSettings: any) {
    this.config = {...this.config, ...newSettings}; 
  }
}
```

---

OBS: O async pipe usado em conjunto com a estrategia onPush recebe sua destruição corretamente de forma automática quando o componente morre, então os dois fazem uma junção perfeita em situações onde se há a necessidade de extrema performance.

---

Também podemos usar o angular decorator attribute, ele é muito útil quando queremos passar do componente pai para o componente filho um attributo ao qual ao longo do ciclo de vida da aplicação não irá mudar, ou seja algo estático, com isso ele irá set evitado de set observado e com isso renderá mais performance para aplicação, isso no caso de você escolher seguir com a estrategia onPush.

```typescript
import { Component, Attribute } from '@angular/core';

@Component({
  selector: 'my-component',
  template: `<p>O tipo é: {{ type }}</p>`
})
export class MyComponent {
  constructor(@Attribute('type') public type: string) { }
}
```

Na hora de criar o componente filho no componente pai:

```html
<my-component type="example"></my-component>
```

---

Também podemos utilizar o ChangeDetectionRef ao qual permite que alteramos de forma granular e de forma mais refinada o mesmo commandos que o angular faz por debaixo dos panos, aqui estão alguns commandos que podemos utilizar com o ChangeDetectionRef:

1. **markForCheck()**: Este método marca o componente e todos os components ancestrais para verificação na próxima execução do ciclo de detecção de mudanças. Isso é útil em estratégias de detecção de mudanças `OnPush`, onde as verificações são normalmente minimizadas e ocorrem apenas sob certas condições.
    
2. **detach()**: Desvincula o componente do sistema de detecção de mudanças. Isso significa que mesmo que os dados do componente mudem, a exibição não será atualizada automaticamente até que você manualmente solicite a verificação.
    
3. **detectChanges()**: Força a verificação de mudanças no componente e em seus filhos. Este método é útil quando você sabe que os dados mudaram, mas a atualização da exibição não ocorreu, talvez porque o componente tenha sido desvinculado.
    
4. **reattach()**: Reataca o componente ao sistema de detecção de mudanças, permitindo que ele seja verificado automaticamente novamente após ter sido previamente desvinculado.
    
5. **checkNoChanges()**: É usado principalmente em modos de desenvolvimento para verificar se não há mudanças. Se houver mudanças detectadas quando este método é chamado, ele lançará um error, sendo útil para garantir que durante uma fase do ciclo de vida nenhumas mudanças ocorram (por exemplo, após a inicialização).

De certa forma é recomendado utilizar somente se estritamente necessário, pois ele pode onerar e muito a performance da aplicação e introduzir bugs desnecessários também.

Exemplo de código:

```typescript
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
    <h1>{{ data }}</h1>
    <button (click)="updateData()">Update Data</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponent {
  data: string = 'Initial data';

  constructor(private cd: ChangeDetectorRef) {}

  updateData() {
    this.data = 'Updated data';
    this.cd.detectChanges();
  }
}
```

Nesse exemplo aqui por exemplo como a changeDetection é o OnPush, então muita coisa se torna manual, mas na hora de atualizar os dados eu marco como atualizado e no próximo ciclo de vida ele será atualizado independente.

---

