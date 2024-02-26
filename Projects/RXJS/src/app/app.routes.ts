import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    //Add a route for register.component.html
    { path: 'register', component: RegisterComponent },
];
