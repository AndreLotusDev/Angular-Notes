import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTabsModule } from '@angular/material/tabs';
import { ProductService } from './register/service/product.service';
import { PanelComponent } from './panel/panel.component';
import { PanelAreaComponent } from './panel-area/panel-area.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from './app.reducer';
import { RoutingOutletModule } from './routing-outlet/routing-outlet.module';
import { RegisterModule } from './register/register.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    ReactiveFormsModule,
    MatTabsModule,
    StoreModule.forRoot({productState: productReducer}),
    EffectsModule.forRoot([]),
    RoutingOutletModule,
    RegisterModule
  ],
  declarations: [
      AppComponent,
      PanelComponent,
      PanelAreaComponent
  ],
  providers: [
    provideEnvironmentNgxMask(),
    provideAnimationsAsync(),
    ProductService
  ],
  exports: [
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
