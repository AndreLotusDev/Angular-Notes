---
aliases: 
tags: 
date created: Sunday, May 5th 2024, 1:09:42 pm
date modified: Sunday, May 26th 2024, 9:20:51 pm
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

Quando usamos defer, basicamente tudo é carregado nos bundles e no main js, todavia se você opta por usar defer em algum componente, quando você entra nesse componente, só então o JS dele e o restante necessário para rodar o componente é de fato inicializado, muito útil para questões performáticas em aplicações de alta tamanho.

---

Assim como podemos usar somente o defer, podemos também combinar ele com outras features para tornar ele ainda mais poderoso, como pode exemplo o placeholder, como sabemos o defer serve para não fazer eager loading de um componente muito grande, com isso é talvez necessário trazer um loading para tal componente, ou seja um placeholder enquanto tudo carrega e é renderizado.

```typescript
@defer {
<large-component />
} @placeholder (minimum 500ms) {
<p>Placeholder content</p>
}
```

