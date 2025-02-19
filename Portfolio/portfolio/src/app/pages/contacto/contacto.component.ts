import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h2>Contacto</h2>
            <a routerLink="/inicio" class="btn btn-outline-primary">Volver a Inicio</a>
          </div>
          <div class="card">
            <div class="card-body">
              <form (ngSubmit)="onSubmit()">
                <div class="mb-3">
                  <label for="nombre" class="form-label">Nombre</label>
                  <input type="text" class="form-control" id="nombre" [(ngModel)]="contactForm.nombre" name="nombre" required>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" [(ngModel)]="contactForm.email" name="email" required>
                </div>
                <div class="mb-3">
                  <label for="mensaje" class="form-label">Mensaje</label>
                  <textarea class="form-control" id="mensaje" rows="4" [(ngModel)]="contactForm.mensaje" name="mensaje" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary w-100">Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      background-color: #F5E6CC;
      border: none;
      border-radius: 15px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .form-control {
      border: 1px solid #8B4513;
      padding: 10px;
    }
    .btn-primary {
      background-color: #8B4513;
      border-color: #8B4513;
    }
  `]
})
export class ContactoComponent {
  contactForm = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  onSubmit() {
    console.log('Formulario enviado:', this.contactForm);
    // Aquí puedes agregar la lógica para enviar el formulario
    this.contactForm = {
      nombre: '',
      email: '',
      mensaje: ''
    };
  }
}