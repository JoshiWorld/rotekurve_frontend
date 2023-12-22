import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.css']
})
export class StartseiteComponent {
  entered = '0';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  onMouseEnter(index: number): void {
    this.entered = index.toString();
    this.updateStyles();
  }

  onMouseLeave(): void {
    // Reset styles when mouse leaves
    this.entered = '0';
    this.updateStyles();
  }

  private updateStyles(): void {
    // Use Renderer2 to add/remove classes or apply styles dynamically
    const element = this.el.nativeElement;

    // Clear existing classes
    ['0', '1', '2'].forEach(i => this.renderer.removeClass(element, `[--i:${i}]`));

    // Add current class
    this.renderer.addClass(element, `[--i:${this.entered}]`);
  }
}
