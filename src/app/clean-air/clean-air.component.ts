import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";

@Component({
    selector: 'app-clean-air',
    standalone: true,
    templateUrl: './clean-air.component.html',
    styleUrl: './clean-air.component.scss',
    imports: [HeaderComponent]
})
export class CleanAirComponent {

}
