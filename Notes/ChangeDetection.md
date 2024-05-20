---
aliases: 
tags: 
date created: Sunday, May 19th 2024, 11:16:18 pm
date modified: Sunday, May 19th 2024, 11:35:29 pm
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