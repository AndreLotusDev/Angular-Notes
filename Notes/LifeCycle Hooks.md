---
aliases: 
tags: 
date created: Monday, May 20th 2024, 11:12:45 pm
date modified: Tuesday, May 21st 2024, 11:16:24 pm
---
No angular temos o ciclo de vida de componente, alguns são chamados uma vez e outros são chamados várias vezes, tudo vai depender do tipo que você quer usar.

No angular podemos implementar else diretamente chamando else dentro de um componente e usando uma função com o nome adequado (modo dirty), ou podemos usar uma interface ao qual nos força a implementar tal método.

Exemplo:

```typescript
export class MainComponent {
	function onInit() {
	}
}
```

```typescript
export class MainComponent implements OnInit {
	function onInit() {
	}
}
```

Ambos irão funcionar, todavia no segundo ao qual damos enforce de interface tudo fica mais clean.

Também podemos chamar dentro de outra função, mas isso não é uma boa prática.

Exemplo:

```typescript
export class MainComponent {
	function basic() {
		this.onInit();
	}
}
```

---

A ordem dos life cycle hooks:

**ngOnChanges:** Executado sempre que há uma mudança em um dos inputs do componente (propriedades vinculadas a dados). Recebe um objeto SimpleChanges que contém os valores atuais e anteriores das propriedades.

**ngOnInit:** Chamado uma vez, após a primeira inicialização das propriedades vinculadas a dados do componente. É um bom lugar para colocar lógica de inicialização.

**ngDoCheck:** Chamado após ngOnChanges e ngOnInit, e serve para detectar e agir sobre mudanças que o Angular não vai detectar por conta própria.

**ngAfterContentInit:** Chamado após o Angular projetar conteúdo externo na view do componente. É útil quando você quer executar alguma ação depois que o conteúdo interno for projetado.

**ngAfterContentChecked:** Chamado após o método ngAfterContentInit e sempre que o conteúdo projetado for verificado pelo mecanismo de detecção de mudanças do Angular.

**ngAfterViewInit:** Chamado após a inicialização das views do componente e views filhas. Se você precisa manipular elementos DOM ou configurar components filhos, esse é o memento certo.

**ngAfterViewChecked:** Chamado após o ngAfterViewInit e sempre que as views do componente e views filhas forem verificadas.

**ngOnDestroy:** Chamado imediatamente antes de o Angular destruir o componente. É um bom memento para desfazer inscrições e desconectar observadores de eventos para evitar vazamentos de memória.

---

