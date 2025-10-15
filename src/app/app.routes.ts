import { Routes } from '@angular/router';
import { ItensMagicosComponent } from './components/itens-magicos/itens-magicos.component';
import { PersonagensComponent } from './components/personagens/personagens.component';

export const routes: Routes = [
  { path: 'itens-magicos', component: ItensMagicosComponent },
  { path: 'personagens', component: PersonagensComponent },
  { path: '', redirectTo: 'itens-magicos', pathMatch: 'full' },
];
