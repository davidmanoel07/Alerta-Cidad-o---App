import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Mensagem {
  texto: string;
  tipo: 'usuario' | 'policia';
  timestamp: Date;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChatPage {
  mensagemTexto: string = '';
  mensagens: Mensagem[] = [];
  chatAtivo: boolean = true;

  @ViewChild('chatContainer', { static: false }) chatContainer!: ElementRef;

  constructor(private router: Router) {}

  ngOnInit() {
    const url = this.router.parseUrl(this.router.url);
    const motivo = url.queryParams['motivo'];
    if (motivo) {
      console.log("Motivo da denúncia:", motivo);
    }

    this.mensagens.push({
      texto: 'Olá, em que posso ajudar?',
      tipo: 'policia',
      timestamp: new Date()
    });

    this.scrollToBottom();
  }

  enviarMensagem() {
    if (!this.mensagemTexto.trim()) return;

    this.mensagens.push({
      texto: this.mensagemTexto,
      tipo: 'usuario',
      timestamp: new Date()
    });

    this.scrollToBottom();

    setTimeout(() => {
      this.mensagens.push({

        texto: 'Sua ocorrência foi registrada com sucesso. Um agente entrará em contato em breve para prestar assistência.',

        
        tipo: 'policia',
        timestamp: new Date()
      });
      this.scrollToBottom();
    }, 1000);

    this.mensagemTexto = '';
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.chatContainer?.nativeElement) {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      }
    }, 100);
  }
}

