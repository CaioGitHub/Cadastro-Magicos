import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpellsListComponent } from './components/spells-list/spells-list.component';
import { ThemeToggleComponent } from './shared/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SpellsListComponent, ThemeToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cadastro Mágico';
}
