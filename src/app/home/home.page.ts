import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Importe o IonicModule

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule] // Importe IonicModule aqui
})
export class HomePage {
  constructor() {}
}