import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { CleanAirComponent } from './clean-air/clean-air.component';
import { AboutComponent } from './about/about.component';
import { RealizationsComponent } from './realizations/realizations.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "czyste-powietrze",
    component: CleanAirComponent
  },
  {
    path: "o-nas",
    component: AboutComponent
  },
  {
    path: "realizacje",
    component: RealizationsComponent
  },
  {
    path: "aktualnosci",
    component: NewsComponent
  },
  {
    path: "kontakt",
    component: ContactComponent
  }
];
