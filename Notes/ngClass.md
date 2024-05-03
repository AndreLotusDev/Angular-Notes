---
aliases: 
tags: 
date created: Friday, May 3rd 2024, 10:45:53 am
date modified: Friday, May 3rd 2024, 10:55:59 am
---
Podemos fazer a estilização usando condicionais de algumas formas:

1 - Usando o [ngClass]="NOME_DA_CLASSE"

2 - Usando array [ngClass]="['NOME_DA_CLASSE_1', 'NOME_DA_CLASSE_2']"

3 - Usando anotação de JSON OBJ [ngClass]={'CLASSE_1': true, 'CLASSE_2': false}
	O true ou false indica se a classe vai se aplicada ou não, permitindo assim operadores ternários para criar uma flexibilidade

4 - Usando funções [ngClass]="getClass()"
	function getClass() {
		return {
			'beginner': true
		}
	}

5 - Usando avaliação de booleano [class.CLASSE_ESPECIFICA]="true"