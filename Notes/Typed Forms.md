---
aliases: 
tags: 
date created: Saturday, May 25th 2024, 8:06:27 pm
date modified: Saturday, May 25th 2024, 8:23:27 pm
---
A partir do angular 14 introduzimos o typed forms, ao qual adiciona tipagem nos formulários, isso pode set muito útil em projetos de larga escala e mesmo em projetos de pequena escala, pois serve para termos mais controle e segurança sobre o que há dentro de um formulário, garantindo que só sermos capazes de acessar coisas realmente existe e não nuláveis e indefinidas.

Exemplo de um formulário tipado:

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface LoginForm {
  login: string;
  password: string;
}

@Component({
  selector: 'app-login',
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="submitLogin()">
      <div>
        <label for="login">Login:</label>
        <input id="login" type="text" formControlName="login" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" type="password" formControlName="password" required>
      </div>
      <button type="submit" [disabled]="!loginForm.valid">Login</button>
    </form>
  `
})
export class LoginComponent {
  loginForm: FormGroup<LoginForm>;

  constructor() {
    this.loginForm = new FormGroup<LoginForm>({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  submitLogin() {
    if (this.loginForm.valid) {
      console.log('Login Data:', this.loginForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
```

Ou seja, na hora de injetar valores, buscar valores, resetar valores será muito mais fácil, pois termos ajuda do linter para ver se isso é uma operação válida ou não.

---