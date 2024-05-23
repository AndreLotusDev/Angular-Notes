---
aliases: 
tags: 
date created: Wednesday, February 28th 2024, 8:54:12 pm
date modified: Thursday, May 23rd 2024, 9:51:14 am
---
Pipes no angular devem set escritos em minusculo e com tudo junto, exemplo:

```typescript
@Pipe({
   name: 'filesize'
})
export FileSizePipe implements PipeTransform {

}
```

Podemos passar pipes por parametros:

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCourses'
})
export class FilterCoursesPipe implements PipeTransform {
  transform(courses: any[], category: string): any[] {
    if (!courses) return [];
    if (!category || category.trim() === '') return courses;

    return courses.filter(course => course.category.toLowerCase().includes(category.toLowerCase()));
  }
}
```

```typescript
<select [(ngModel)]="selectedCategory">
  <option value="">Todas as Categorias</option>
  <option value="tecnologia">Tecnologia</option>
  <option value="negocios">Negócios</option>
  <option value="arte">Arte</option>
</select>

<ul>
  <li *ngFor="let course of courses | filterCourses:selectedCategory">
    {{ course.name }} - {{ course.category }}
  </li>
</ul>
```

```typescript
export class CoursesComponent {
  selectedCategory = '';
  courses = [
    { name: 'Desenvolvimento Web', category: 'tecnologia' },
    { name: 'Marketing Digital', category: 'negocios' },
    { name: 'Pintura com Aquarela', category: 'arte' }
  ];
}
```

---

Else formatam o subprotudo de texto para um produto de texto.

# Date Pipe

https://angular.io/guide/pipes

variavel | date

variavel | date: "dd/MM/yyyy" -> produz com o formato da data do brasil

variavel | titleCase

variavel | currency: 'BRL':'symbol':'1.2-2':'pt' -> formata para moeda brasileira, com simbolo, duas casas decimais e respeitando simbolos brasileiros

---

No pipes por default, vamos supor que você use um pipe para filtrar um array, todavia os pipes não são reativos, ou seja, se adicionarmos um item no array, isso não vai set atualizado na UI, para atualizar a UI de forma reativa usamos pipes impuros, isso significa que no ciclo de UI e hooks esses pipes vão set chamados novamente.

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeat',
  pure: false  
})
export class RepeatPipe implements PipeTransform {
  transform(value: string, times: number): string {
    return value.repeat(times);
  }
}
```

---