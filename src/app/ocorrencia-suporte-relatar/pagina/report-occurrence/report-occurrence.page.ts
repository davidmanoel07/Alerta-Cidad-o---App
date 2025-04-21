// Importações necessárias para o componente funcionar
import { Component } from '@angular/core'; // Para definir o componente Angular
import { Router } from '@angular/router'; // Para navegação entre páginas
import { AlertController, IonicModule } from '@ionic/angular'; // Para exibir alertas e usar componentes do Ionic
import { CommonModule } from '@angular/common'; // Necessário para diretivas como *ngIf, *ngFor, etc.
import { FormsModule } from '@angular/forms'; // Necessário para o uso de [(ngModel)]

// Decorador que define o componente Angular
@Component({
  selector: 'app-relatar-ocorrencia', // Nome da tag do componente (não usado diretamente aqui)
  standalone: true, // Define que o componente é independente (não depende de um módulo Angular)
  imports: [CommonModule, FormsModule, IonicModule], // Módulos necessários que esse componente vai usar
  templateUrl: 'report-occurrence.page.html', // Caminho para o HTML da página
  styleUrls: ['./report-occurrence.page.scss'], // Caminho para o CSS da página
})
export class ReportOccurrencePage {
  // Propriedades que armazenam o motivo da ocorrência selecionado ou digitado
  motivoOcorrencia: string | null = null;
  outraOcorrencia: string | null = null;

  // Injeta o AlertController (para mostrar alertas) e o Router (para navegação)
  constructor(
    private alertController: AlertController,
    private router: Router
  ) {}

  // Método assíncrono para mostrar um alerta com uma mensagem
  async presentAlert(mensagem: string) {
    const alert = await this.alertController.create({
      header: 'Atenção!', // Título do alerta
      message: mensagem,   // Mensagem que será exibida
      buttons: ['OK'],     // Botão de confirmação
    });

    await alert.present(); // Exibe o alerta
  }

  // Método que será chamado ao clicar no botão "Enviar"
  enviarOcorrencia() {
    // Verifica se nenhum motivo foi selecionado
    if (!this.motivoOcorrencia) {
      this.presentAlert('Selecione um motivo da ocorrência.');
      return;
    }

    // Se o motivo selecionado foi "outro", verifica se o campo de texto foi preenchido
    if (
      this.motivoOcorrencia === 'outro' &&
      (!this.outraOcorrencia || this.outraOcorrencia.trim() === '')
    ) {
      this.presentAlert('Por favor, digite o motivo da ocorrência.');
      return;
    }

    // Define o motivo final com base no que foi selecionado ou digitado
    const motivoFinal =
      this.motivoOcorrencia === 'outro'
        ? this.outraOcorrencia
        : this.motivoOcorrencia;

    // Aqui seria o local para enviar os dados para uma API ou banco de dados
    console.log('Motivo da Ocorrência:', motivoFinal);

    // Limpa os campos após o envio
    this.motivoOcorrencia = null;
    this.outraOcorrencia = null;

    // Exibe um alerta informando que foi enviado com sucesso
    this.presentAlert('Ocorrência enviada com sucesso!');
  }

  // Método chamado ao clicar no botão "Voltar", redireciona para a página de ocorrências
  goToOccurrences() {
    this.router.navigate(['/occurrences']);
  }
}
