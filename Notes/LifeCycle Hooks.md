---
aliases: 
tags: 
date created: Monday, May 20th 2024, 11:12:45 pm
date modified: Monday, May 20th 2024, 11:19:41 pm
---
No angular temos o ciclo de vida de componente, alguns são chamados uma vez e outros são chamados várias vezes, tudo vai depender do tipo que você quer usar.

No angular podemos implementar else diretamente chamando else dentro de um componente e usando uma função com o nome adequado (modo dirty), ou podemos usar uma interface ao qual nos força a implementar tal metodo.

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


