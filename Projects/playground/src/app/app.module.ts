import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderHighlightDirectiveDirective } from './directives/border-highlight-directive/border-highlight-directive';
import { HoverHighlightDirective } from './directives/hover-highlight/hover-highlight.directive';
import { NgUnlessDirective } from './directives/ngUnless.directive';

@NgModule({
  declarations: [
    AppComponent,
    HoverHighlightDirective,
    BorderHighlightDirectiveDirective,
    NgUnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
