import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemInfoComponent } from './item-info/item-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    TableModule,
    ButtonModule,
    DividerModule,
    BrowserAnimationsModule,
    MatTableModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
