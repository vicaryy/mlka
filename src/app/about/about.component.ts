import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: [HeaderComponent]
})
export class AboutComponent {

}
