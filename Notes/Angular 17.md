---
aliases: 
tags: 
date created: Thursday, April 25th 2024, 11:15:04 pm
date modified: Monday, May 6th 2024, 11:13:51 pm
---

# For

Atualmente o Angular 17 trouxe uma pequena diferença de fazer loop iterator em arrays e listas, pode se dar por esta nova sintaxe:

```javascript
<ul>
  <template for="let item of items">
    <li>
      {{ item }}
    </li>
  </template>
</ul>
```

É também possível de iterar sobre um for e providenciar informações caso o array esteja vazio.

```typescript
@for (item of items; track item.name) { 
	<li>{{ item.name }}</li> 
} 
@empty { 
	<li>There are no items.</li> 
}
```

Neste exemplo será mostrado: There are no items caso o array esteja vazio, também perceba que é necessário providenciar uma propriedade de tracking, isso garante performance, pois o array só sera re renderizado caso realmente muito necessário.

Já a antiga versão:

```javascript
<ul>
  <li *ngFor="let item of items">
    {{ item }}
  </li>
</ul>
```

Essa sintaxe nova lembra bastante a do razor e de bastante frameworks do server side rendering, tornando as coisas mais clean e de fácil legibilidade.

---