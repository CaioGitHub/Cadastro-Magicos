import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Personagem {
  nome: string;
  raca: string;
  nivel: number;
  cor: string;
  imagem: string;
}

@Component({
  selector: 'app-personagens',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personagens.component.html',
  styleUrl: './personagens.component.css'
})
export class PersonagensComponent {
  novoPersonagem: Personagem = { nome: '', raca: '', nivel: 1, cor: '#ffffff', imagem: '' };
  personagens: Personagem[] = [];

  readonly placeholder = 'assets/rpg/personagem-placeholder.png';

  adicionarPersonagem() {
    if (!this.novoPersonagem.nome || !this.novoPersonagem.raca) return;
    this.personagens.push({ ...this.novoPersonagem });
    this.novoPersonagem = { nome: '', raca: '', nivel: 1, cor: '#ffffff', imagem: '' };
  }


  onImgError(ev: Event) {
    const img = ev.target as HTMLImageElement;
    if (!img.src.includes('item-placeholder.png')) {
      img.src = this.placeholder;
    }
  }

  isImagemValida(url: string): boolean {
    if (!url) return false;
    const pattern = /^https?:\/\/.+/i;
    return pattern.test(url);
  }
}
