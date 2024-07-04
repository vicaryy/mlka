import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent]
})
export class HomeComponent implements OnInit {

    constructor(private meta: Meta) { }

    ngOnInit(): void {
        this.meta.updateTag({ name: 'description', content: 'Strona główna firmy MLKA, informacje na temat usług które udostępniamy.' });
        this.meta.updateTag({ name: 'keywords', content: 'MLKA, informacje, Strona Główna' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow' });

        //opengraph
        this.meta.updateTag({ property: 'og:title', content: 'Strona Główna · MLKA' });
        this.meta.updateTag({ property: 'og:site_name', content: 'MLKA' });
        this.meta.updateTag({ property: 'og:description', content: 'Strona główna firmy MLKA, informacje na temat usług.' });
        this.meta.updateTag({ property: 'og:image', content: 'https://www.mlka.eu/favicon.ico' });
        this.meta.updateTag({ property: 'og:url', content: 'https://www.mlka.eu/' });
        this.meta.updateTag({ property: 'og:type', content: 'website' });
    }
}
