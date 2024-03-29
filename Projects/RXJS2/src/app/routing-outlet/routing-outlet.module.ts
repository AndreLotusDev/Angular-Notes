
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingOutletComponent } from './routing-outlet-component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routesRoutingOutlet } from './routing.routes';
import { RoutingOutletFooterComponent } from './routing-outlet-footer/routing-outlet-component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routesRoutingOutlet)
    ],
    declarations: [
        RoutingOutletComponent,
        RoutingOutletFooterComponent
    ],
    exports: [
        RoutingOutletComponent
    ]
})
export class RoutingOutletModule { }