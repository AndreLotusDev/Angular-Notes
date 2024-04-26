---
aliases: 
tags: 
date created: Thursday, April 25th 2024, 11:15:04 pm
date modified: Thursday, April 25th 2024, 11:16:45 pm
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