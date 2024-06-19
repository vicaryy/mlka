import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { AfterViewInit, Component, Input, QueryList, ViewChildren } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
    @Input('text') text!: string;
    images: string[] = ["./assets/images/picture2.jpeg", "./assets/images/picture3.jpeg", "./assets/images/picture4.jpeg", "./assets/images/picture5.jpeg"]
    imagesElements!: NodeListOf<HTMLImageElement>;
    switchesElements!: NodeListOf<HTMLImageElement>;
    frequency: number = 5000;
    i: number = 1;
    changeImage: boolean = true;

    ngAfterViewInit(): void {
        this.imagesElements = document.querySelectorAll("header img");
        this.switchesElements = document.querySelectorAll("header .image-switches > span");

        this.switchImages();
    }

    switchImages() {
        setInterval(() => {
            if (this.i === this.images.length)
                this.i = 0;

            if (!this.changeImage) {
                this.changeImage = true;
                this.i++;
                return;
            }

            this.disableActiveImages();
            this.disableActiveSwitches();
            this.imagesElements[this.i].className = "active";
            this.switchesElements[this.i].classList.add("active");
            this.i++;
        }, this.frequency);
    }

    switchImage($event: MouseEvent) {

        let el = $event.target as HTMLElement;
        let classList = el.classList;
        if (!classList[0]) {
            el = $event.target as HTMLElement;
            el = el.parentElement!;
            classList = el.classList;
        }
        if (classList.contains("active"))
            return;

        const index: number = +(classList[0].charAt(classList[0].length - 1));
        this.changeImage = false;
        this.disableActiveImages();
        this.disableActiveSwitches();
        this.imagesElements[index].className = "active";
        this.switchesElements[index].classList.add("active");
        this.i = index;
    }

    disableActiveImages() {
        this.imagesElements.forEach(e => e.className = "");
    }
    disableActiveSwitches() {
        this.switchesElements.forEach(e => e.classList.remove("active"));
    }
}
