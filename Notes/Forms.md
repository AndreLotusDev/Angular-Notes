---
aliases: 
tags: 
date created: Saturday, April 20th 2024, 10:36:51 pm
date modified: Saturday, April 20th 2024, 11:08:52 pm
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