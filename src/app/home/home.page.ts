import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  constructor(private router: Router) {}

  goToAnonymous() {
    this.router.navigate(['/anonymous']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToLogin() { 
    this.router.navigate(['/login']); 
  }
}
