import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";

@Component({
    selector: 'app-realizations',
    standalone: true,
    templateUrl: './realizations.component.html',
    styleUrl: './realizations.component.scss',
    imports: [HeaderComponent]
})
export class RealizationsComponent {

}
