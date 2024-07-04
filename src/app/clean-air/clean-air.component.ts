import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-clean-air',
    standalone: true,
    templateUrl: './clean-air.component.html',
    styleUrl: './clean-air.component.scss',
    imports: [HeaderComponent]
})
export class CleanAirComponent implements OnInit {

    constructor(private meta: Meta) { }

    ngOnInit(): void {
        this.meta.updateTag({ name: 'description', content: 'Czyste powietrze czyli jak dbamy o czyste powietrze w wybudowanych przez nas budowli.' });
        this.meta.updateTag({ name: 'keywords', content: 'MLKA, czyste powietrze' });

        //opengraph
        this.meta.updateTag({ property: 'og:title', content: 'Czyste Powietrze · MLKA' });
        this.meta.updateTag({ property: 'og:description', content: 'Czyste powietrze czyli jak dbamy o czyste powietrze w wybudowanych przez nas budowli.' });
    }
}
