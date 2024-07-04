import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: [HeaderComponent]
})
export class AboutComponent implements OnInit {

    constructor(private meta: Meta) { }

    ngOnInit(): void {
        this.meta.updateTag({ name: 'description', content: 'O nas, kim jesteśmy? Nasz cel i doświaczenie.' });
        this.meta.updateTag({ name: 'keywords', content: 'MLKA, o nas' });

        //opengraph
        this.meta.updateTag({ property: 'og:title', content: 'O Nas · MLKA' });
        this.meta.updateTag({ property: 'og:description', content: 'O nas, kim jesteśmy? Nasz cel i doświaczenie.' });
    }
}
