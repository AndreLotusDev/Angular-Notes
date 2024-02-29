---
aliases: 
tags: 
date created: Thursday, February 29th 2024, 7:37:37 pm
date modified: Thursday, February 29th 2024, 8:24:15 pm
---
Pipes no angular devem set escritos em minusculo e com tudo junto, exemplo:

@Pipe({
   name: 'filesize'
})
export FileSizePipe implements PipeTransform {

}

---

Else formatam o subprotudo de texto para um produto de texto.

# Date Pipe

https://angular.io/guide/pipes

variavel | date

variavel | date: "dd/MM/yyyy" -> produz com o formato da data do brasil

variavel | titleCase

variavel | currency: 'BRL':'symbol':'1.2-2':'pt' -> formata para moeda brasileira, com simbolo, duas casas decimais e respeitando simbolos brasileiros


