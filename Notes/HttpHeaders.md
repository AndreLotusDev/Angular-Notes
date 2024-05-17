---
aliases: 
tags: 
date created: Friday, May 17th 2024, 12:10:37 am
date modified: Friday, May 17th 2024, 12:11:26 am
---
Assim como temos o HttpParams que podemos passar pelo body ou seja qual seja a situação, podemos também passar pelo cabeçalho dados de forma muito mais elegante utilizando o suporte do angular.

Exemplo:

```typescript
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPostsWithHeaders(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer your-token-here');

    return this.http.get(`${this.baseUrl}/posts`, { headers: headers });
  }
}
```

---
