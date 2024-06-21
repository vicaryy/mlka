import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent implements OnInit{
    ngOnInit(): void {
        this.disableNavAndFooter();
    }

    disableNavAndFooter() {
        document.querySelector("nav")?.classList.add("disable");
        document.querySelector("nav-block")?.classList.add("disable");
        document.querySelector("footer")?.classList.add("disable");
    }

}
