import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactFormComponent {
  contactForm: FormGroup;
  protected isSubmitting = false;
  protected submitSuccess = false;
  protected submitError = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      company: ['', [Validators.required]],
      need: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitError = false;
      this.submitSuccess = false;

      // Simula envio do formulário
      setTimeout(() => {
        console.log('Formulário enviado:', this.contactForm.value);
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset();

        // Remove mensagem de sucesso após 5 segundos
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      }, 1000);
    } else {
      // Marca todos os campos como touched para mostrar erros
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  getErrorMessage(fieldName: string): string {
    const control = this.contactForm.get(fieldName);
    if (control?.hasError('required')) {
      return 'Este campo é obrigatório';
    }
    if (control?.hasError('email')) {
      return 'Email inválido';
    }
    if (control?.hasError('minlength')) {
      const minLength = control.errors?.['minlength'].requiredLength;
      return `Mínimo de ${minLength} caracteres`;
    }
    return '';
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.contactForm.get(fieldName);
    return !!(control && control.invalid && control.touched);
  }

  isFieldValid(fieldName: string): boolean {
    const control = this.contactForm.get(fieldName);
    return !!(control && control.valid && control.touched);
  }

  markFieldAsTouched(fieldName: string) {
    const control = this.contactForm.get(fieldName);
    if (control) {
      control.markAsTouched();
    }
  }
}
