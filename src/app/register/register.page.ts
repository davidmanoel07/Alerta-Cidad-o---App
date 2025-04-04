import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]], 
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordsMatchValidator }); // ✅ Validador de senha adicionado corretamente
  }

  // 🔥 Validador de senha corrigido
  passwordsMatchValidator: ValidatorFn = (control: AbstractControl) => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    
    return password === confirmPassword ? null : { passwordsNotMatching: true };
  };


  // 🤔 Você precisa fazer isso agora?
// ✅ Tratar envio dos dados (simulação por enquanto)
// 🟢 Sim, já está feito do jeito certo!
// 💡 Esse console.log serve como simulação do envio para o backend.
// 👉 Quando o backend estiver pronto, troque esse console.log por uma chamada HTTP real.
  onSubmit() {
    if (this.registerForm.valid) {
      console.log('✅ Formulário enviado:', this.registerForm.value);
    } else {
      console.log('❌ Formulário inválido');
    }
  }
}


