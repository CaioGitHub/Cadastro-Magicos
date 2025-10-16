import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  salvar<T>(chave: string, valor: T): void {
    try {
      localStorage.setItem(chave, JSON.stringify(valor));
    } catch (e) {
      console.error(`Erro ao salvar em ${chave}`, e);
    }
  }

  carregar<T>(chave: string, valorPadrao: T): T {
    try {
      const dados = localStorage.getItem(chave);
      return dados ? JSON.parse(dados) : valorPadrao;
    } catch (e) {
      console.error(`Erro ao carregar de ${chave}`, e);
      return valorPadrao;
    }
  }

  remover(chave: string): void {
    localStorage.removeItem(chave);
  }

  limparTudo(): void {
    localStorage.clear();
  }
}
