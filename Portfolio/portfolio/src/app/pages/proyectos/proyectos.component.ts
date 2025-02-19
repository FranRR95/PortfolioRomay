import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mt-5">
      <div class="d-flex justify-content-between align-items-center mb-5">
        <h2>Mis Proyectos</h2>
        <a routerLink="/inicio" class="btn btn-outline-primary">Volver a Inicio</a>
      </div>
      <div class="row">
        <div class="col-md-4 mb-4" *ngFor="let proyecto of proyectos">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">{{proyecto.nombre}}</h5>
              <p class="card-text">{{proyecto.descripcion}}</p>
              <div class="tecnologias mb-3">
                <span class="badge" *ngFor="let tech of proyecto.tecnologias">
                  {{tech}}
                </span>
              </div>
            </div>
            <div class="card-footer bg-transparent border-0">
              <a [href]="proyecto.link" class="btn btn-primary w-100" target="_blank">Ver Proyecto</a>
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
      transition: transform 0.3s ease;
    }
    .card:hover {
      transform: translateY(-5px);
    }
    .badge {
      background-color: #8B4513;
      margin-right: 5px;
      margin-bottom: 5px;
      padding: 5px 10px;
    }
    .btn-primary {
      background-color: #8B4513;
      border-color: #8B4513;
    }
  `]
})
export class ProyectosComponent {
  proyectos = [
    {
      nombre: 'E-commerce App',
      descripcion: 'Aplicación web de recetas donde los usuarios pueden buscar, guardar y compartir sus recetas favoritas. Incluye filtros por ingredientes y tiempo de preparación.',
      tecnologias: ['Angular', 'Node.js', 'MongoDB'],
      link: 'https://www.recetasgratis.net/'
    },
    {
      nombre: 'Portfolio Personal v1',
      descripcion: 'Primera versión de mi portfolio profesional con diseño minimalista y animaciones suaves. Incluye sección de proyectos y formulario de contacto.',
      tecnologias: ['React', 'Firebase', 'Material-UI'],
      link: 'https://www.hostinger.es/tutoriales/portfolio-ejemplos'
    },
    {
      nombre: 'GestorGym',
      descripcion: 'Sistema de gestión para gimnasios que permite administrar miembros, clases y pagos. Incluye dashboard para visualizar estadísticas.',
      tecnologias: ['Vue.js', 'Express', 'MySQL'],
      link: 'https://www.centrosupera.com/guadalquivir/'
    }
  ];
}