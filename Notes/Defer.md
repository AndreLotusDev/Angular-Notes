---
aliases: 
tags: 
date created: Sunday, May 5th 2024, 1:09:42 pm
date modified: Saturday, May 25th 2024, 8:25:55 pm
---
**OBS: Essa feature é interessante não usar de forma direta quando começamos uma aplicação, é bom utilizarmos somente quando já temos uma aplicação em produção e ela já começa a demonstrar sinais de performance onerada, ai sim utilizamos essa feature para melhorarmos a performance.**

---

Para questões de performance temos a keyword defer, ela é usada para indicar quando um componente deve set inicializado ou não, utilizando ela antes dos parametros de entrada indicamos que o componente so deverá set inicializado quando seus dados forem alterados.

exemplo:

```javascript
<app-meus-componentes defer [dados]="meusDados"></app-meus-componentes>
```

Nesse componente, o meusDados começa sem inicialização, ou seja um array vazio, quando o array for preenchido por um serviço ele será renderizado.

Isso por set útil caso o componente ao set re renderizado cause uma queda de performance grande ou se o serviço demorar muito para carregar e adiarmos sua inicialização.

---