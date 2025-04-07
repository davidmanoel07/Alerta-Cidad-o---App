import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.page.html',
  styleUrls: ['./register-success.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class RegisterSuccessPage {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
