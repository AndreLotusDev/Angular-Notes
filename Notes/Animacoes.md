---
aliases: 
tags: 
date created: Friday, April 12th 2024, 6:15:17 pm
date modified: Friday, April 12th 2024, 6:16:21 pm
---
O angular é um framework completo, portanto ate animações ele não depende de pacotes de terceiros, ele tem seus pacotes nativos.

Base adicionar no app.module.ts

```javascript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
```

``` javascript
 imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
```

---