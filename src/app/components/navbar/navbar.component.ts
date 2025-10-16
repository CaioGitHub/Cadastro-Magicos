import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeToggleComponent } from '../../shared/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, ThemeToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {}
