import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { waterfallAnimation } from './waterfallAnimation';

@Component({
  selector: 'app-startseite-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [waterfallAnimation]
})
export class CardComponent {
  @Input() cardId: number = 0;
  animationState: string = 'visible';

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const element = this.elementRef.nativeElement.querySelector('.card');

    if (element) {
      const scrollPosition = window.scrollY;
      const elementHeightTop = element.getBoundingClientRect().top;
      const elementHeightBottom = element.getBoundingClientRect().bottom;
      const threshold = 1600;

      if(0 > (elementHeightTop - (elementHeightTop - elementHeightBottom)) - threshold) {
        this.animationState = 'visible';
      } else {
        this.animationState = 'hidden';
      }
    }
  }
}
