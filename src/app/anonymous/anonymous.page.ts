import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; 
import { IonicModule } from '@ionic/angular'; 
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-anonymous',
  templateUrl: './anonymous.page.html',
  styleUrls: ['./anonymous.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AnonymousPage {
  motivo: string = ''; // Armazena o motivo da ocorrência
  telefone: string = ''; // Armazena o telefone informado

  constructor(private router: Router) {}

  concluirDenuncia() {
    // Validação simples: verifica se os campos estão preenchidos
    if (this.motivo.trim() === '' || this.telefone.trim() === '') {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Redireciona para a página de chat, passando o motivo como parâmetro
    this.router.navigate(['/chat'], {
      queryParams: {
        motivo: this.motivo
      }
    });
  }
}



