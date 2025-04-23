import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonFooter, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-risk-area',
  templateUrl: './risk-area.page.html',
  styleUrls: ['./risk-area.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonFooter, IonButton]
})
export class RiskAreaPage implements OnInit {

  constructor(private router: Router) {}

  goToOccurrences() {
    this.router.navigate(['/occurrences']);
  }

  ngOnInit() {
  }

}
