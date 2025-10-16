import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../../shared/services/storage.service';

interface ItemMagico {
  nome: string;
  tipo: string;
  poder: number;
  imagem: string;
}

@Component({
  selector: 'app-itens-magicos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './itens-magicos.component.html',
  styleUrl: './itens-magicos.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ItensMagicosComponent {
  itens: ItemMagico[] = [];
  novoItem: ItemMagico = { nome: '', tipo: '', poder: 0, imagem: '' };
  editando = false;
  indexEditando: number | null = null;
  readonly placeholder = '/assets/rpg/item-placeholder.png';
  private readonly storageKey = 'itensMagicos';

  constructor(private storage: StorageService) {}

  ngOnInit() {
    this.itens = this.storage.carregar(this.storageKey, []);
  }

  salvarItem() {
    if (!this.novoItem.nome || !this.novoItem.tipo) return;

    if (this.editando && this.indexEditando !== null) {
      this.itens[this.indexEditando] = { ...this.novoItem };
      this.editando = false;
      this.indexEditando = null;
    } else {
      this.itens.push({ ...this.novoItem });
    }

    this.persistir();
    this.novoItem = { nome: '', tipo: '', poder: 0, imagem: '' };
  }

  editarItem(index: number) {
    this.novoItem = { ...this.itens[index] };
    this.editando = true;
    this.indexEditando = index;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  removerItem(index: number) {
    this.itens.splice(index, 1);
    this.persistir();
  }

  limparTudo() {
    if (confirm('Deseja remover todos os itens mágicos?')) {
      this.itens = [];
      this.storage.remover(this.storageKey);
    }
  }

  private persistir() {
    this.storage.salvar(this.storageKey, this.itens);
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
