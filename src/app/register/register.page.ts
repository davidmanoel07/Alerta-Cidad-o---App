import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Captura os dados do formulário
      const formData = this.registerForm.value;
  
      // Remove espaços do telefone
      const telefoneSemEspacos = formData.phone.replace(/\s/g, '');
  
      // Cria o objeto do novo usuário com o telefone tratado
      const novoUsuario = {
        ...formData,
        phone: telefoneSemEspacos
      };
  
      // Recupera usuários do localStorage ou cria um array vazio
      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
  
      // Adiciona o novo usuário
      usuarios.push(novoUsuario);
  
      // Salva no localStorage
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
  
      console.log('✅ Formulário enviado:', novoUsuario);
  
      // Redireciona
      this.router.navigate(['/register-success']);
    } else {
      console.log('❌ Formulário inválido');
    }
  }
}  



