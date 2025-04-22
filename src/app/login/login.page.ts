import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, AlertController } from '@ionic/angular'; // Importe AlertController
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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController // Injete AlertController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required], // Mantendo 'telefone' aqui
    });
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, telefone } = this.loginForm.value;

      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
      const usuarioEncontrado = usuarios.find((u: any) =>
        u.email === email && u.phone === telefone.replace(/\s/g, '') // Busca usando 'phone'
      );

      if (usuarioEncontrado) {
        console.log('✅ Login bem-sucedido:', usuarioEncontrado);
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
        this.router.navigate(['/get-address']);
      } else {
        console.log('❌ Usuário não encontrado');
        this.presentAlert('Erro', 'Usuário não encontrado. Verifique as informações!');
      }
    } else {
      console.log('❌ Formulário inválido');
    }
  }

  goToResetNumber() {
    this.router.navigate(['/reset-number']);
  }
}