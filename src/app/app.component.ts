import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rotekurve_frontend';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        initFlowbite();
      }
    })
  }

  ngOnInit(): void {
    initFlowbite();
  }

  isAdminRoute(): boolean {
    return this.router.url.startsWith('/admin');
  }
}
