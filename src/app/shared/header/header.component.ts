import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  header: Map<string, string> = new Map([
    ['startseite', 'Startseite'],
    ['eintrittskarte', 'Lang lebe die Eintrittskarte!'],
    ['swg-fotos', 'SWG-Fotos'],
    ['ueberuns', 'Über uns'],
    ['mitgliedschaft', 'Mitgliedschaft'],
    ['kontakt', 'Kontakt'],
    ['links', 'Links'],
  ]);

  constructor(private router: Router) { }

  // Checks routerurl with the header map
  isActive(route: string): boolean {
    return this.router.url === '/' + route;
  }
}
