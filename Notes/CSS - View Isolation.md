---
aliases: 
tags: 
date created: Wednesday, May 15th 2024, 12:12:12 am
date modified: Wednesday, May 15th 2024, 12:20:55 am
---
O angular tem dois jeitos de definir como uma classe de CSS será renderizada no document de uma página:

1 - O primeiro é o default que é o emulated, ele funciona respeitando a hierarquia de um componente, então um componente filho pode herdar coisas de components pais, todavia o inverso não é verdadeira, com isso podemos encapsular classes de CSS mais especificas dentro de um componente em especifico sem afetar components pais ou de hierarquias mais internas ou que não dependem dele diretamente.

Uma pequena descrição do que acontece por debaixo dos panos:

**1. **Emulated** (Padrão): Este é o modo padrão de encapsulação no Angular. Neste modo, os estilos definidos em um componente são aplicados apenas a esse componente, sem afetar outros elementos fora dele. O Angular alcança isso adicionando atributos únicos às tags HTML do componente e também aos seletores CSS correspondentes nos estilos do componente. Por exemplo, se você tem um componente com um seletor `app-example`, o Angular adiciona um atributo como `_ngcontent-c0` a cada elemento no template do componente e modifica os seletores CSS para que só apliquem aos elementos que têm esse atributo.**

---

