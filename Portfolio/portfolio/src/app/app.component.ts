import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <!-- Aquí puedes crear tu propio menú de navegación -->
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container {
      padding-top: 20px;
      min-height: 100vh;
      background-color: #FFF8E7;
    }
  `]
})
export class AppComponent {
  title = 'portfolio';
}