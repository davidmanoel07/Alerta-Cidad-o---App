import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, OnInit } from '@angular/core';
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
  selector: 'app-chat-anonymous',
  templateUrl: './chat-anonymous.page.html',
  styleUrls: ['./chat-anonymous.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChatAnonymousPage implements OnInit {
  reasonReport: string = 'oi';
  mensagemTexto: string = '';
  mensagens: Mensagem[] = [];
  chatAtivo: boolean = true;

  @ViewChild('chatContainer', { static: false }) chatContainer!: ElementRef;

  constructor(private router: Router) {}

  ngOnInit() {
    this.reasonReport = localStorage.getItem('reasonReport') || '';
    console.log('Motivo da denúncia:', this.reasonReport);
    const url = this.router.parseUrl(this.router.url);
    const motivoDoParametro = url.queryParams['motivo'];
    if (motivoDoParametro) {
      console.log("Motivo da denúncia:", motivoDoParametro);
      this.reasonReport = motivoDoParametro; // Atualiza reasonReport com o valor do query param
    }

    // Se existir um motivo, envia a mensagem do usuário no chat
    if (this.reasonReport.trim() !== '') {
      this.mensagens.push({
        texto: this.reasonReport,
        tipo: 'usuario',
        timestamp: new Date()
      });

      // Rolando o chat para a última mensagem
      this.scrollToBottom();

      // Resposta automática da polícia após 1 segundo
      setTimeout(() => {
        this.mensagens.push({
          texto: 'Sua ocorrência foi registrada com sucesso. Um agente entrará em contato em breve para prestar assistência.',
          tipo: 'policia',
          timestamp: new Date()
        });
        this.scrollToBottom();
      }, 1000);
    } else {
      // Caso não tenha motivo, mostra mensagem padrão
      this.mensagens.push({
        texto: 'Olá, em que posso ajudar?',
        tipo: 'policia',
        timestamp: new Date()
      });
      this.scrollToBottom();
    }
  }

  // Função para rolar o chat até a última mensagem
  scrollToBottom() {
    setTimeout(() => {
      if (this.chatContainer?.nativeElement) {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      }
    }, 100);
  }

  // Função para enviar mensagens do usuário
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
}