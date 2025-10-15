import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  styleUrl: './itens-magicos.component.css'
})
export class ItensMagicosComponent {
  novoItem: ItemMagico = { nome: '', tipo: '', poder: 0, imagem: '' };
  itens: ItemMagico[] = [];

  readonly placeholder = '/assets/rpg/item-placeholder.png';

  adicionarItem() {
    if (!this.novoItem.nome || !this.novoItem.tipo) return;
    this.itens.push({ ...this.novoItem });
    this.novoItem = { nome: '', tipo: '', poder: 0, imagem: '' };
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
