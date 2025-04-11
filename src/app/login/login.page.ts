import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, telefone } = this.loginForm.value;

      // Busca os usuários salvos
      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

      // Verifica se existe algum com o mesmo email e telefone
      const usuarioEncontrado = usuarios.find((u: any) => 
        u.email === email && u.phone === telefone
      );

      if (usuarioEncontrado) {
        console.log('✅ Login bem-sucedido:', usuarioEncontrado);

        // 👉 Salva no localStorage
       localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));

        this.router.navigate(['/occurrences']);
        
      } else {
        console.log('❌ Usuário não encontrado');
        alert('Usuário não encontrado. Verifique se as informações estão corretas!');
      }
    } else {
      console.log('❌ Formulário inválido');
    }
  }

  goToResetNumber() {
    this.router.navigate(['/reset-number']);
  }
}

