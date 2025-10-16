import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../../shared/services/storage.service';

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
  styleUrl: './personagens.component.css',
  encapsulation: ViewEncapsulation.None
})
export class PersonagensComponent {
  personagens: Personagem[] = [];
  novoPersonagem: Personagem = { nome: '', raca: '', nivel: 1, cor: '#3c2f1a', imagem: '' };
  editando = false;
  indexEditando: number | null = null;
  readonly placeholder = '/assets/rpg/personagem-placeholder.png';
  private readonly storageKey = 'personagens';

  constructor(private storage: StorageService) {}

  ngOnInit() {
    this.personagens = this.storage.carregar(this.storageKey, []);
  }

  salvarPersonagem() {
    if (!this.novoPersonagem.nome || !this.novoPersonagem.raca) return;

    if (this.editando && this.indexEditando !== null) {
      this.personagens[this.indexEditando] = { ...this.novoPersonagem };
      this.editando = false;
      this.indexEditando = null;
    } else {
      this.personagens.push({ ...this.novoPersonagem });
    }

    this.persistir();
    this.novoPersonagem = { nome: '', raca: '', nivel: 1, cor: '#3c2f1a', imagem: '' };
  }

  editarPersonagem(index: number) {
    this.novoPersonagem = { ...this.personagens[index] };
    this.editando = true;
    this.indexEditando = index;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  removerPersonagem(index: number) {
    this.personagens.splice(index, 1);
    this.persistir();
  }

  limparTudo() {
    if (confirm('Deseja apagar todos os personagens?')) {
      this.personagens = [];
      this.storage.remover(this.storageKey);
    }
  }

  private persistir() {
    this.storage.salvar(this.storageKey, this.personagens);
  }

  onImgError(ev: Event) {
    const img = ev.target as HTMLImageElement;
    img.src = this.placeholder;
  }

  isImagemValida(url: string): boolean {
    if (!url) return false;
    const pattern = /^https?:\/\/.+/i;
    return pattern.test(url);
  }
}
