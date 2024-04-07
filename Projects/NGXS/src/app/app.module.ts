import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxsModule } from '@ngxs/store';
import { TodoState } from './todo-store';
import { FormsModule } from '@angular/forms';
import { ToDoListViewerComponent } from './to-do-list-viewer/to-do-list-viewer.component';

@NgModule({
  declarations: [	
    AppComponent,
    ToDoListViewerComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxsModule.forRoot([
      TodoState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
