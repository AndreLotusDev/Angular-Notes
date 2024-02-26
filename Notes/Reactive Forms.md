---
aliases: 
tags: 
date created: Monday, February 26th 2024, 12:02:26 pm
date modified: Monday, February 26th 2024, 12:41:28 pm
---
Sempre use reactive forms, muito melhor que o ngmodel.

Sempre use o form builder API em vez de instanciar diretamente os formularios, aqui esta gerado pelo chat GPT algumas motivações.

---

No Angular, o `FormBuilder` é uma ferramenta de abstração que simplifica a criação de instâncias de formulários, como `FormGroup` e `FormControl`. Existem várias razões pelas quais o `FormBuilder` é frequentemente preferido em vez de instanciar diretamente essas classes para criar formulários reativos. Aqui estão alguns dos motivos principais:

### 1. Simplificação do Código
O `FormBuilder` fornece métodos convenientes que tornam o código mais limpo e mais fácil de ler. Por exemplo, ao usar o `FormBuilder`, você pode criar um `FormGroup` com vários `FormControl`s usando uma única chamada de função, o que reduz a verbosidade do código.

### 2. Redução de Errors
Ao minimizar a necessidade de instanciar explicitamente classes como `FormGroup` e `FormControl`, o `FormBuilder` reduz a possibilidade de errors, como a omissão de parâmetros necessários ou a criação incorreta de estruturas de formulários complexas.

### 3. Consistência
O `FormBuilder` promove um padrão de criação de formulários, o que ajuda a manter a consistência em toda a base de código. Isso é particularmente útil em projetos grandes ou quando trabalha em equipe, pois facilita para outros desenvolvedores entenderem e modificarem o código do formulário.

### 4. Facilidade de Manutenção
Formulários criados com `FormBuilder` são geralmente mais fáceis de manter e modificar. Como o código é mais conciso e padronizado, fazer alterações em um formulário existente ou refatorar partes do sistema de formulários se torna uma tarefa menos onerosa.

### 5. Facilidades Adicionais
O `FormBuilder` oferece métodos para configurar validadores diretamente, o que pode set mais conveniente do que configurá-los manualmente em instâncias de `FormControl`. Isso simplifica a adição de validação complexa aos campos do formulário.

### Conclusão
Embora seja perfeitamente possível criar formulários reativos no Angular sem usar o `FormBuilder`, adotar essa ferramenta traz benefícios significativos em termos de legibilidade do código, facilidade de manutenção e redução de errors. Ao abstrair as complexidades da instância direta de `FormGroup` e `FormControl`, o `FormBuilder` permite que os desenvolvedores se concentrem mais na lógica do formulário e menos na infraestrutura necessária para implementá-lo.