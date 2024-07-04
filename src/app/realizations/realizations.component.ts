import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-realizations',
    standalone: true,
    templateUrl: './realizations.component.html',
    styleUrl: './realizations.component.scss',
    imports: [HeaderComponent]
})
export class RealizationsComponent implements OnInit {

    constructor(private meta: Meta) { }

    ngOnInit(): void {
        this.meta.updateTag({ name: 'description', content: 'Realizacje które stworzyliśmy na przestrzeni ostatnich lat.' });
        this.meta.updateTag({ name: 'keywords', content: 'MLKA, realizacje' });

        //opengraph
        this.meta.updateTag({ property: 'og:title', content: 'Realizacje · MLKA' });
        this.meta.updateTag({ property: 'og:description', content: 'Realizacje które stworzyliśmy na przestrzeni ostatnich lat.' });
    }
}
