import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonFooter, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-suport',
  templateUrl: './suport.page.html',
  styleUrls: ['./suport.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonFooter, IonButton]
})

export class SuportPage implements OnInit {
  constructor(private router: Router) {}

  goToOccurrences() {
    this.router.navigate(['/occurrences']);
  }
  ngOnInit() {
  }
}
