import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonLabel, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonItem, IonThumbnail, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-status-occurrences',
  templateUrl: './status-occurrences.page.html',
  styleUrls: ['./status-occurrences.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonFooter, IonLabel, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonItem, IonThumbnail, IonButton]
})
export class StatusOccurrencesPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goToOccurrences() {
    this.router.navigate(['/occurrences']);
  }


}
