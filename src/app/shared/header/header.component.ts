import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements AfterViewInit {
  header: Map<string, string>;

  constructor(private router: Router, private authService: AuthService, private cdr: ChangeDetectorRef) {
    this.header = new Map([
      ['aktuelles', 'Aktuelles'],
      ['ueberuns', 'Über uns'],
      ['spielplan', 'Spielplan'],
      ['links', 'Links'],
      ['kontakt', 'Kontakt'],
    ]);
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

  // Checks routerurl with the header map
  isActive(route: string): boolean {
    return this.router.url === '/' + route;
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticatedUser();
  }
}
