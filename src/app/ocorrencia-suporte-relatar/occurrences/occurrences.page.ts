import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonCard,
    IonCardContent, IonCardHeader, IonCardSubtitle, IonItem, IonLabel, IonList,IonThumbnail, IonCol, IonGrid, IonRow, IonButton, IonButtons,  IonMenu, IonMenuButton, IonIcon} from '@ionic/angular/standalone';

@Component({
    standalone: true,
    selector: 'app-occurrences',
    templateUrl: 'occurrences.page.html',
    styleUrls: ['occurrences.page.scss'],
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonCard,
        IonCardContent, IonCardHeader, IonCardSubtitle, IonItem, IonLabel, IonList,IonThumbnail, IonCol, IonGrid, IonRow, IonButton, IonButtons,  IonMenu, IonMenuButton, IonIcon], // <-- adiciona IonFooter aqui
})
export class OccurrencesPage {
    constructor(private router: Router) {}

    goToSuport() {
        this.router.navigate(['/suport']);
    }

    goToReport() {
        this.router.navigate(['/report-occurrence']);
    }

    goToChat() {
        this.router.navigate(['/chat']);
    }

    goToRisk() {
        this.router.navigate(['/risk-area']);
    }

    goToFeedback() {
        this.router.navigate(['/feedback']);
    }

    goToStatus() {
        this.router.navigate(['/status-occorrences']);
    }

    goToAddress() {
        this.router.navigate(['/add-address']); // Certifique-se de que '/add-address' é a rota correta
      }
}