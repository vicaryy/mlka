import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";

@Component({
    selector: 'app-news',
    standalone: true,
    templateUrl: './news.component.html',
    styleUrl: './news.component.scss',
    imports: [HeaderComponent]
})
export class NewsComponent {

}
