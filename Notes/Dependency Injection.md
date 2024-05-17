---
aliases: 
tags: 
date created: Friday, May 17th 2024, 12:20:39 am
date modified: Friday, May 17th 2024, 12:22:23 am
---

**Observação: sobre compilação e tamanho**

Se você utilizar a injeção dentro de um componente ou dentro de um módulo especifico e esse módulo em especifico não inicializado por eager loading
então o bundle de compilação será menor e irá compilar mais rápido, sempre injete o service na camada correta, o providedIn='root' nem sempre é o ideal,
pois isso diz que ele tem que ser um singleton disponivel por toda aplicação.

**Sobre o Tree-Shakeable Providers**

No contexto do Angular, os Tree-Shakeable Providers são uma abordagem de fornecimento de serviços que permite a inclusão de serviços em seu bundle de aplicativo de forma mais eficiente. Essa técnica é usada para reduzir o tamanho final do aplicativo ao garantir que apenas os serviços realmente utilizados sejam incluídos no bundle final.

Sempre tenha em mente de então remover imports não usados, e realmente importa onde ele realmente seja necessário.

Tree shaking works on references,Since here we are importing Service1 in app.module irrespective of the fact that we don’t inject it anywhere in our application our bundle will still have Service1 present.

---

Na maioria das situações somente o serviço e com providedIn='root' será mais que necessário, todavia algumas situações exigem mais que isso, e exigem um refinamento maior e na hora de fabricação (factory building) else precisam de uma construção dinamica, por isso durante a injeção de dependência o angular fornece mecanismos mais sofisticados.

Exemplo:

```typescript
import { NgModule, InjectionToken } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

export class ApiService {
  constructor(private http: HttpClient, private apiUrl: string) { }

  getData() {
    return this.http.get(this.apiUrl);
  }
}

// Token de injeção para a URL da API
export const API_URL = new InjectionToken<string>('apiUrl');

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: ApiService,
      useFactory: (http: HttpClient, apiUrl: string) => {
        return new ApiService(http, apiUrl);
      },
      deps: [HttpClient, API_URL] // Depende de HttpClient e API_URL
    },
    {
      provide: API_URL,
      useValue: environment.apiUrl // Valor condicional baseado no ambiente
    }
  ]
})
export class AppModule { }
```

Nesse exemplo acima construimos um serviço de API ao qual a URL base é definida dinamicamente dependendo do ambiente que estamos.

O sistema de dependencia do angular faz que caso um componente filho consuma um serviço que tenha que ser injetado, ele irá procurar nos providers dele mesmo, logo após no provider do componente pai, e depois no módulo pai.



---