---
aliases: 
tags: 
date created: Thursday, May 16th 2024, 9:28:45 pm
date modified: Thursday, May 16th 2024, 9:28:50 pm
---
Quando especificamos o serviço com o decorator injectable queremos dizer que ele pode ser provido com o injetor de dependencia nativo do Angular.

Exemplo:

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
}
```

Com isso estamos dizendo que o UserService poderá ser provido via injeção de dependencia, e com o providedIn: 'root' significa que estamos provendo quando a aplicação inicializa somente uma instancia do tipo UserService para toda aplicação, isso chamamos de singleton.

Exemplo de como consumir tal UserService:

```typescript
import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome, {{user.name}}</h1>`
})
export class AppComponent {
  user: any;

  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
  }
}
```

---