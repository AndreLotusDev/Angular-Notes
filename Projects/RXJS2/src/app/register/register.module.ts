
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterFooterComponent } from './register-footer/register-footer-component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        RegisterComponent,
        RegisterFooterComponent
    ],
    exports: [
        RegisterComponent,
        RegisterFooterComponent
    ]
})
export class RegisterModule {

}