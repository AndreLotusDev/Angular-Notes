---
aliases: 
tags: 
date created: Monday, April 29th 2024, 2:28:21 pm
date modified: Monday, April 29th 2024, 2:34:26 pm
---
Podemos usar a library concurrently para rodar scripts em paralelo, concurrently é uma library de javascript que voce pode instalar via NPM ou YARN.

Para instalar utilizando npm:
	npm i concurrently [VERSAO_ESPECIFICA]
	

Com isso podemos rodar o json server e angular no mesmo projeto, e isso pode por exemplo facilitar e muito o estudo do angular, podemos fazer um backend falso e simplesmente sair desenvolvendo.

1 - instale o concurretly
    npm install concurrently
	npm install json-server

	"start": "concurrently \"npm run server\" \"npm run angular\"",