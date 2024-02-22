---
aliases: 
tags: 
date created: Monday, February 19th 2024, 6:27:39 pm
date modified: Wednesday, February 21st 2024, 12:56:56 am
sticker: lucide//file-code
---
---

O angular sempre está atualizando constantemente, de 6 em 6 meses.

Nunca é bom deixar nosso aplicativo muitas versões atrás da versão atual, é sempre manter o app atualizado sempre que possível.

**Sempre tomar cuidado com breaking changes

Usar uma versão LTS é sempre superior, pois else garantem um thermo de suporte a longo prazo, geralmente no .NET e ANGULAR é de 2 anos.

![[Pasted image 20240219182800.png]]

## Porque utilizar ANGULAR?

Diferente do VUE e React, eu particulamente os considero libraries, já o ANGULAR contém muitas funcionalidades ao qual evita muitas das vezes eu ter que buscar uma bibilioteca de terceiros.

![[Pasted image 20240219185923.png]]

A popularidade do ANGULAR é constante.

- Rápido
- Moderno
- Simplificado
- Produtivo

No ANGULAR uma aplicação é uma lista de components.

Os components podem consumir um serviço, onde esses serviços comunicam com o mundo externo.

![[Pasted image 20240219185228.png]]

![[Pasted image 20240219185605.png]]

ANGULAR usa Typescript, que é desenvolvido pela microsoft, ao qual foi criada pelo pai do C# e .NET, é open source e é um superset de javascript.

---
## Setup

- Instalar NodeJS (ultima versão estável)
- NPM
	- O NPM é o gerenciador de pacotes do NODE, é como se fosse o NUGET package manager do .NET

---

Fun fact: a licença MIT é altamente permissível, sendo que permite você clonar um projeto e fazer as alterações necessárias.

---

npm install -g npm@latest
npm install -g @angular/cli

ng new -> cria uma nova aplicação
ng n -> cria uma nova aplicação
ng n --help -> lista como fazer o processo de criação do projeto

ng -> lista commandos possiveis para rodar
ng --help -> lista commandos com mais detalhes


---

O web-pack-dev-server é o ambiente de desenvolvimento que fica escutando qualquer alteração, ao sinal de qualquer alteração o sistema recompila novamente.

Tem como compilar sendo para produção com o commando npm s --prod, com isso os arquivos serão compactados, a aplicação será mais performática e os pacotes que chegarão para o cliente final serão muito menores.

Isso é útil somente para simular o ambiente de produção, mas não é adequado para de fato se utilizar para o ambiente de produção

npm b --prod -> builda para produção para colocar no servidor de produção

O ANGULAR Dev Tools é muito útil, pois permite no desenvolvimento a gente debuggar nossa aplicação angular.

---

A documentação do angular conta com a API LIST, o lugar mais importante onde tem tudo documentado do que o framework pode lhe ofertar:

https://angular.io/api

Comece a estudar angular por aqui

https://angular.io/guide/architecture

---

Para criar components a gente usa o ANGULAR CLI

ng generate component [NOME_COMPONENTE]
ng g c [NOME_COMPONENTE]

ng g --help -> Traz uma lista de components que posso gerar, tendo uma lista completa dos schematis:

[´TODO] estudar os tipos de schematic que podemos gerar

- class
- component
- directive
- enum
- guard
- interface
- library
- module
- pipe
- service
- serviceWorker
- universal
- webWorker

Dentro de um modulo temos 3 coisas injetaveis

- declarations -> onde eu instancio os componentes
- imports -> onde eu importo outros modulos
- providers -> onde eu importo os serviços