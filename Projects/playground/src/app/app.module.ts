import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderHighlightDirectiveDirective } from './border-highlight-directive/border-highlight-directive';
import { HoverHighlightDirective } from './hover-highlight/hover-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HoverHighlightDirective,
    BorderHighlightDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
