import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-news',
    standalone: true,
    templateUrl: './news.component.html',
    styleUrl: './news.component.scss',
    imports: [HeaderComponent]
})
export class NewsComponent implements OnInit {

    constructor(private meta: Meta) { }

    ngOnInit(): void {
        this.meta.updateTag({ name: 'description', content: 'Najświeższe informacje dotyczące naszej firmy.' });
        this.meta.updateTag({ name: 'keywords', content: 'MLKA, akutalności' });

        //opengraph
        this.meta.updateTag({ property: 'og:title', content: 'Aktualności · MLKA' });
        this.meta.updateTag({ property: 'og:description', content: 'Najświeższe informacje dotyczące naszej firmy.' });
    }
}
