---
aliases: 
tags: 
date created: Monday, May 6th 2024, 11:15:50 pm
date modified: Monday, May 6th 2024, 11:18:39 pm
---
No angular é possível utilizar self enclosing tags para components, ou seja, não é necessário sempre fazer assim.

```html
<componente-de-listagem></componente-de-listagem>
```

O exemplo acima é totalmente válido, mas não 100% necessário, pode se fazer assim também:

```html
<componente-de-listagem/>
```

Não existe certo ou errado. Tudo depende da sua situação, o primeiro exemplo é mais verboso, mas pode se fazer necessário quando dentro da tag precisa se prover elementos de projeção.

Já o segundo exemplo por set menos verboso pode set utilizado em situações onde não há necessidade de elementos de projeção.