---
aliases: 
tags: 
date created: Saturday, April 20th 2024, 10:36:51 pm
date modified: Saturday, April 20th 2024, 11:23:38 pm
---
Formulario por variavel:

```javascript
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-seu-componente',
  templateUrl: './seu-componente.component.html',
  styleUrls: ['./seu-componente.component.css']
})
export class SeuComponenteComponent {
  constructor() { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Formulário é válido');
      // Aqui você pode processar os dados do formulário
    } else {
      console.log('Formulário não é válido');
      // Aqui você pode tratar os erros ou indicar ao usuário para corrigir os campos
    }
  }
}
```

```javascript
<form #f="ngForm" (ngSubmit)="onSubmit(f)"> 
	<input type="text" name="nome" ngModel required> 
	<button type="submit">Enviar</button> 
</form>
```

---

É possivel usar o ngModel sem apontar para uma variavel:

```javascript
<form #f="ngForm"> <input type="text" name="usuario" ngModel> <button type="submit">Enviar</button> </form>
```

```javascript
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-seu-componente',
  templateUrl: './seu-componente.component.html',
  styleUrls: ['./seu-componente.component.css']
})
export class SeuComponenteComponent {
  constructor() { }

  onSubmit(form: NgForm) {
    console.log('Valor do usuário:', form.value.usuario);
    // Acessa o valor do campo "usuario"
  }
}
```

Com validação

```javascript
.erro {
  color: red;
}

<form #f="ngForm" novalidate>
  <input type="text" name="usuario" ngModel #usuario="ngModel" required minlength="2">
  <div *ngIf="usuario.errors && (usuario.dirty || usuario.touched)" style="color: red;">
    <p *ngIf="usuario.errors.required">O campo é obrigatório.</p>
    <p *ngIf="usuario.errors.minlength">O campo deve ter pelo menos 2 caracteres.</p>
  </div>
  <button type="submit" [disabled]="!f.valid">Enviar</button>
</form>

```

---

