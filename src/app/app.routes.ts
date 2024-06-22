import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CleanAirComponent } from './clean-air/clean-air.component';
import { AboutComponent } from './about/about.component';
import { RealizationsComponent } from './realizations/realizations.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "MLKA · Strona Główna"
    },
    {
        path: "czyste-powietrze",
        title: "MLKA · Czyste Powietrze",
        loadComponent: () => import('./clean-air/clean-air.component').then(e => e.CleanAirComponent)
    },
    {
        path: "o-nas",
        component: AboutComponent,
        title: "MLKA · O Nas"
    },
    {
        path: "realizacje",
        component: RealizationsComponent,
        title: "MLKA · Realizacje"
    },
    {
        path: "aktualnosci",
        component: NewsComponent,
        title: "MLKA · Aktualności"
    },
    {
        path: "kontakt",
        component: ContactComponent,
        title: "MLKA · Kontakt"
    },
    {
        path: "polityka-prywatnosci",
        title: "MLKA · Polityka Prywatności",
        loadComponent: () => import('./privacy-policy/privacy-policy.component').then(e => e.PrivacyPolicyComponent)
    },
    {
        path: "**",
        title: "MLKA · 404 - Nie znaleziono",
        loadComponent: () => import('./not-found/not-found.component').then(e => e.NotFoundComponent)
    }
];
