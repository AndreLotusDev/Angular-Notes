---
aliases: 
tags: 
date created: Wednesday, May 29th 2024, 7:21:54 pm
date modified: Wednesday, May 29th 2024, 7:28:14 pm
---
Aqui está uma lista de features que normalmente os devs esquecem de utilizar no angular.

- NgTemplateOutlet - Muito util pois permite injectar do componente pai components dinamicos nos filhos
- Content project, permite injectar HTML em lugares pre selecionados a partir do componente pai no componente filho
- Dependency Injection Token - permite a multi configuração com caracteristicas diferentes ao mesmo serviço
- NgTemplate, NgContainer, NgTemplateOutlet - assim como o ng template outlet as outras keywords reservada geralmente são quase sempre esquecidas
- Dynamic routing - permite que a partir da rota coisas flexiveis sejam feitas dentro de um componente
- TrackBy - Dentro de operadores de loop for pode set usado trackby, isso pode set util pois aumenta substancialmente a performance
- HostListener e HostBinding - na maior parte do tempo o angular fornece já coisas pre prontas que evitam a necessidade de interagir mais próximo do DOM, todavia essas features permitem um refinamento mais in deep
- Attribute Directives - Permitem acessar in deep a DOM e eventos
- Angular Elements - Permite a criação e manipulação de components em angular de forma universal, não se isolando somente ao framework angular
- Router Guards Return Types - Retorna um booleando cedendo acesso ao componente ou não

---