import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router'; // Importe o Router

@Component({
  selector: 'app-get-address',
  templateUrl: './get-address.page.html',
  styleUrls: ['./get-address.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule]
})
export class GetAddressPage implements OnInit {

  constructor(private router: Router) { } // Injete o Router no construtor

  ngOnInit() {
  }

  goToOccurrences() {
    this.router.navigate(['/occurrences']); // Navega para a página /occurrences
  }

  goToAddAddress() {
    this.router.navigate(['/add-address']); // Navega para a página /add-address
  }

}