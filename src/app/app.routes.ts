import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PanierComponent } from './pages/panier/panier.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
    {
        path: '', 
        title: "home",
        component: HomeComponent 
    },
    {
        path: 'panier', 
        title: "panier",
        component: PanierComponent 
    },
    {
        path: 'admin', 
        title: "admin",
        component: AdminComponent 
    },
];
