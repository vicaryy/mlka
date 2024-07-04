import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RealizationsComponent } from './realizations/realizations.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Strona Główna · MLKA"
    },
    {
        path: "czyste-powietrze",
        title: "Czyste Powietrze · MLKA",
        loadComponent: () => import('./clean-air/clean-air.component').then(e => e.CleanAirComponent)
    },
    {
        path: "o-nas",
        component: AboutComponent,
        title: "O Nas · MLKA"
    },
    {
        path: "realizacje",
        component: RealizationsComponent,
        title: "Realizacje · MLKA"
    },
    {
        path: "aktualnosci",
        component: NewsComponent,
        title: "Aktualności · MLKA"
    },
    {
        path: "kontakt",
        component: ContactComponent,
        title: "Kontakt · MLKA"
    },
    {
        path: "polityka-prywatnosci",
        title: "Polityka Prywatności · MLKA",
        loadComponent: () => import('./privacy-policy/privacy-policy.component').then(e => e.PrivacyPolicyComponent),
    },
    {
        path: "**",
        title: "MLKA · 404 - Nie znaleziono",
        loadComponent: () => import('./not-found/not-found.component').then(e => e.NotFoundComponent)
    }
];
