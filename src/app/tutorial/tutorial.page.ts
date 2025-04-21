import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonListHeader, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone'; // Importe os componentes do infinite scroll

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonListHeader, IonInfiniteScroll, IonInfiniteScrollContent], // Adicione os componentes ao imports
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {
  dados = [
    'Aprenda a acessar sua conta.',
    'Recupere seu acesso se perder o celular.',
    'Crie sua conta rapidamente.',
    'Navegue anonimamente pelo app.',
    'Saiba como informar uma ocorrência.',
    'Descubra as áreas com maior risco.',
    'Converse com a polícia em tempo real.',
    'Use o botão de emergência em situações críticas.'
    // ... seus dados iniciais
  ];
  pagina = 1;
  itensPorPagina = 4; // Carregar 4 itens por vez
  todosOsDadosCarregados = false;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll | undefined; // Use | undefined

  constructor() { }

  ngOnInit() {
    // Os dados iniciais já estão carregados no array 'dados'
  }

  carregarMaisDados(event: any) {
    setTimeout(() => {
      const startIndex = this.pagina * this.itensPorPagina;
      const novosDados = this.dados.slice(startIndex, startIndex + this.itensPorPagina);

      if (novosDados.length > 0) {
        console.log('Carregando mais dados...', novosDados);
        this.pagina++;
      } else {
        this.todosOsDadosCarregados = true;
        if (this.infiniteScroll) { // Verifique se infiniteScroll está definido
          this.infiniteScroll.disabled = true;
        }
      }

      event.target.complete();
    }, 1000); // Simula um tempo de carregamento
  }

  resetInfiniteScroll() {
    this.pagina = 1;
    this.todosOsDadosCarregados = false;
    if (this.infiniteScroll) { // Verifique se infiniteScroll está definido
      this.infiniteScroll.disabled = false;
    }
    // Recarregue seus dados iniciais aqui, se necessário
  }
}