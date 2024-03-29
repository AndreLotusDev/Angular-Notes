---
aliases: 
tags: 
date created: Wednesday, February 28th 2024, 8:16:12 pm
date modified: Friday, March 29th 2024, 6:21:31 am
---
A diferença entre 1 - this.router.navigate() e 2 - this.router.navigateByUrl();

é que na segunda opção o browser faz uma action parecida com o que você faz quando clica na URL, digita o endereço e aperta enter, já na primeira opção ele simplesmente chamando a rota por debaixo dos panos, sem dar um mini reload na aplicação.

---

CanLoad: especifica se uma rota pode set carregada ou não, caso não possa set carregada o javascript não é nem descarregado.

---

# A diferença entre o forRoot e forChild 

No forRoot ele deve set usado no modulo principal, pois com isso ele configura o roteamento principal da aplicação, já o forChild deve set usado em todo submodulo da aplicação, ou seja, o forRoot é chamado so uma vez enquanto o forChild pode set chamado quantas vezes forem necessárias.



---