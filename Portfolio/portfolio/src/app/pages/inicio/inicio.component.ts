import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mt-5">
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h1 class="display-4 fw-bold">Mi Portfolio</h1>
          <p class="lead">Desarrollador Web Full Stack</p>
        </div>
        <div class="col-md-6 offset-md-3">
          <div class="card">
            <div class="card-body text-center">
              <h2 class="card-title mb-4">Sobre mí</h2>
              <p class="card-text">
                Mi nombre es Francisco Rodriguez. Soy un desarrollador web apasionado por crear soluciones digitales innovadoras.
                Mi experiencia abarca tanto el desarrollo frontend como backend.
              </p>
              <div class="mt-4">
                <a routerLink="/proyectos" class="btn btn-primary me-2">Ver Proyectos</a>
                <a routerLink="/contacto" class="btn btn-outline-primary">Contacto</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    h1, .card-title {
      color: #5C4033;
    }
    .card {
      background-color: #F5E6CC;
      border: none;
      border-radius: 15px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }
    .card:hover {
      transform: translateY(-5px);
    }
    .btn-primary {
      background-color: #8B4513;
      border-color: #8B4513;
    }
    .btn-outline-primary {
      color: #8B4513;
      border-color: #8B4513;
    }
  `]
})
export class InicioComponent {}