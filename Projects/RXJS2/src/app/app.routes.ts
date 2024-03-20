import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PanelAreaComponent } from './panel-area/panel-area.component';

export const routes: Routes = [
    
    { path: 'register', component: RegisterComponent },
    { path: 'products', component: RegisterComponent },
    { path: 'panel', component: PanelAreaComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'register' }
];
