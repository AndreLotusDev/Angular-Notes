---
aliases: 
tags: 
date created: Thursday, February 29th 2024, 9:25:26 pm
date modified: Thursday, February 29th 2024, 9:27:11 pm
---
No angular temos a zona dentro do angular e a zona fora do angular, voce pode rodar coisas fora do angular, isso é muito util como diz a documentação, pois com isso podemos rodar codigo fora do angular sem todas as validações que rodam no runtime do angular, de detection change, assim melhorando por fim toda a performance do angular.

https://angular.io/api/core/NgZone

"Running functions via [runOutsideAngular](https://angular.io/api/core/NgZone#runOutsideAngular) allows you to escape Angular's zone and do work that doesn't trigger Angular change-detection or is subject to Angular's error handling.

Any future tasks or microtasks scheduled from within this function will continue executing from outside of the Angular zone.

Use [run](https://angular.io/api/core/NgZone#run) to reenter the Angular zone and do work that updates the application model."

---

