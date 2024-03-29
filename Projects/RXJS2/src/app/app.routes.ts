import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PanelAreaComponent } from './panel-area/panel-area.component';

export const routes: Routes = [
    
    { path: 'register', component: RegisterComponent},

    { path: 'products', component: RegisterComponent },
    { path: 'panel', component: PanelAreaComponent },
    
    //Lazy loads the routing outlet module
    { path: 'routing-outlet', loadChildren: 
        () => import('./routing-outlet/routing-outlet.module').then(m => m.RoutingOutletModule) },

    { path: '**', redirectTo: 'register' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule 
{ 

}