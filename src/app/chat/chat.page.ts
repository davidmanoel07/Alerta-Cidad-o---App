import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat', // ✅ Correção do seletor
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChatPage { // ✅ Correção do nome da classe
  // Aqui você implementará a lógica específica do chat
  constructor(private router: Router) {}

  // Exemplo de como você pode acessar o motivo passado via queryParams
  ngOnInit() {
    this.router.url.includes('?motivo=') ? console.log("Motivo da denúncia:", this.router.parseUrl(this.router.url).queryParams['motivo']) : null
  }
}