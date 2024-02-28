---
aliases: 
tags: 
date created: Wednesday, February 28th 2024, 8:16:12 pm
date modified: Wednesday, February 28th 2024, 8:44:42 pm
---
A diferença entre 1 - this.router.navigate() e 2 - this.router.navigateByUrl();

é que na segunda opção o browser faz uma action parecida com o que você faz quando clica na URL, digita o endereço e aperta enter, já na primeira opção ele simplesmente chamando a rota por debaixo dos panos, sem dar um mini reload na aplicação.

---

CanLoad: especifica se uma rota pode set carregada ou não, caso não possa set carregada o javascript não é nem descarregado.