import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    /* WHEN LOGGED IN, NAVIGATING THE USER TO ADMIN DASHBOARD */
    if (this.authService.isAuthenticatedUser()) {
      this.router.navigate(['/admin/dashboard']);
    }
  }

}
