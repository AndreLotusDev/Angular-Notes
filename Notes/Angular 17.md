---
aliases: 
tags: 
date created: Thursday, April 25th 2024, 11:15:04 pm
date modified: Monday, May 6th 2024, 11:27:54 pm
---

OBS: As novas diretivas do ANGULAR 17 não exigem a necessidade de importar o CommonModules em todas partes do sistema que se precisa usar controles de fluxo, ele já é importado globalmente em todo o projeto, isso pode fazer no final economizar em alguns KB's.

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

# If

Também foi introduzido o controle de fluxo IF, aqui eis um comparativo entre a antiga versão e nova versão ao mesmo tempo.

# ngIf (Antiga versão)

```javascript
@Component({
  standalone: true,
  selector: 'scrollbars',
  imports: [NgIf, ScrollbarX, ScrollbarY],
  template: `
    <scrollbar-x *ngIf="horizontalUsed()"/>
    <scrollbar-y *ngIf="verticalUsed()"/>
  `
})
```

# If (Nova versão)

```javascript
@Component({
  standalone: true,
  selector: 'scrollbars',
  imports: [ScrollbarX, ScrollbarY],
  template: `
    @if (verticalUsed()) {
      <scrollbar-y/>
    }
    @if (horizontalUsed()) {
      <scrollbar-x/>
    }
  `
})
```

---