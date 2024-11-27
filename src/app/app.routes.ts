import { I } from '@angular/cdk/keycodes';
import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
export const routes: Routes = [
    {
        path: '',
        pathMatch:'full',
        loadComponent: () =>{
            return DashboardComponent
        }
    }
];
