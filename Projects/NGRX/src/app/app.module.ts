import { NgModule, isDevMode } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DisplayCounterComponent } from "./display-counter/display-counter.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from "./store/app.state";

@NgModule({
    imports: [
        RouterModule,
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({ app: appReducer}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    ],
    declarations: [
        AppComponent,
        DisplayCounterComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}