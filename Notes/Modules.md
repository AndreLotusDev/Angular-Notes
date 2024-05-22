---
aliases: 
tags: 
date created: Tuesday, May 21st 2024, 11:56:34 pm
date modified: Tuesday, May 21st 2024, 11:57:57 pm
---
No angular podemos invocar modulos com o lazy loading, isso é útil pois na hora do build o angular pega tudo de eager loading e coloca no build de forma estática, isso pode set ruim para projetos grandes com muitas linhas pois isso acaba impactando no binario final gerado.

Aqui está um exemplo de lazy loading que pode auxiliary na performance.

```typescript
const routes: Routes = [
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```
