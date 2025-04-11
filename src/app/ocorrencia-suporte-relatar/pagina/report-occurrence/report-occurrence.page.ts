import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonSelect, IonSelectOption, IonLabel, IonButton, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-report-occurrence',
  templateUrl: './report-occurrence.page.html',
  styleUrls: ['./report-occurrence.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonList, IonSelect, IonSelectOption, IonLabel, IonButton, IonFooter]
})
export class ReportOccurrencePage implements OnInit {

  constructor(private router: Router) {}

  goToOccurrences() {
    this.router.navigate(['/occurrences']);
  }
  
  ngOnInit() {
  }

}
