import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonCard,
    IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList,IonThumbnail, IonCol, IonGrid, IonRow, IonButton, IonButtons} from '@ionic/angular/standalone';

@Component({
    standalone: true,
    selector: 'app-occurrences',
    templateUrl: 'occurrences.page.html',
    styleUrls: ['occurrences.page.scss'],
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonCard,
        IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList,IonThumbnail, IonCol, IonGrid, IonRow, IonButton, IonButtons], // <-- adiciona IonFooter aqui
})
export class OccurrencesPage {
    constructor(private router: Router) {}

    goToSuport() {
        this.router.navigate(['/suport']);
    }

    goToReport() {
        this.router.navigate(['/report-occurrence']);
    }

    goToChat() { // Método renomeado
        this.router.navigate(['/chat']);
    }

}