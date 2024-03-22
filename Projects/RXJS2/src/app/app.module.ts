import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTabsModule } from '@angular/material/tabs';
import { ProductService } from './register/service/product.service';
import { ProductComponent } from './register/product/product.component';
import { PanelComponent } from './panel/panel.component';
import { PanelAreaComponent } from './panel-area/panel-area.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from './app.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgxMaskDirective, 
    NgxMaskPipe,
    ReactiveFormsModule,
    MatTabsModule,
    StoreModule.forRoot({productState: productReducer}),
    EffectsModule.forRoot([])
  ],
  declarations: [
      AppComponent,
      RegisterComponent,
      ProductComponent,
      PanelComponent,
      PanelAreaComponent
  ],
  providers: [
    provideEnvironmentNgxMask(),
    provideAnimationsAsync(),
    ProductService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
