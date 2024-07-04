import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";
import { Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    imports: [HeaderComponent]
})
export class ContactComponent implements OnInit {

    constructor(private meta: Meta) { }

    ngOnInit(): void {
        this.meta.updateTag({ name: 'description', content: 'Formularz kontaktowy z firmą MLKA.' });
        this.meta.updateTag({ name: 'keywords', content: 'MLKA, kontakt' });

        //opengraph
        this.meta.updateTag({ property: 'og:title', content: 'Kontakt · MLKA' });
        this.meta.updateTag({ property: 'og:description', content: 'Formularz kontaktowy z firmą MLKA.' });
    }
}
