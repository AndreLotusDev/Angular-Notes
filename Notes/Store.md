---
aliases: 
tags: 

date created: Saturday, March 2nd 2024, 11:24:08 pm
date modified: Saturday, March 2nd 2024, 11:24:55 pm
---
---
Exemplo de criação de store
```
import { Injectable } from '@angular/core'; import { BehaviorSubject } from 'rxjs'; @Injectable({ providedIn: 'root', }) export class TarefaService { private tarefas: string[] = []; private tarefasSubject = new BehaviorSubject<string[]>(this.tarefas); tarefas$ = this.tarefasSubject.asObservable(); adicionarTarefa(tarefa: string) { this.tarefas = [...this.tarefas, tarefa]; this.tarefasSubject.next(this.tarefas); } removerTarefa(index: number) { this.tarefas = this.tarefas.filter((_, i) => i !== index); this.tarefasSubject.next(this.tarefas); } }
```

```
import { Component, OnInit } from '@angular/core'; import { TarefaService } from './tarefa.service'; @Component({ selector: 'app-tarefas', template: ` <input [(ngModel)]="novaTarefa" (keyup.enter)="adicionarTarefa()" /> <ul> <li *ngFor="let tarefa of tarefas; let i = index"> {{ tarefa }} <button (click)="removerTarefa(i)">Remover</button> </li> </ul> `, }) export class TarefasComponent implements OnInit { novaTarefa = ''; tarefas: string[] = []; constructor(private tarefaService: TarefaService) {} ngOnInit() { this.tarefaService.tarefas$.subscribe(tarefas => { this.tarefas = tarefas; }); } adicionarTarefa() { if (!this.novaTarefa.trim()) return; this.tarefaService.adicionarTarefa(this.novaTarefa); this.novaTarefa = ''; } removerTarefa(index: number) { this.tarefaService.removerTarefa(index); } }
```
---