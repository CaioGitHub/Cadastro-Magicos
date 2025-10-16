import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DndApiService {
  private baseUrl = 'https://www.dnd5eapi.co/api';

  constructor(private http: HttpClient) {}

  // Listar magias
  getSpells(): Observable<any> {
    return this.http.get(`${this.baseUrl}/spells`);
  }

  // Detalhe de uma magia
  getSpellDetail(index: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/spells/${index}`);
  }

  // Listar monstros
  getMonsters(): Observable<any> {
    return this.http.get(`${this.baseUrl}/monsters`);
  }

  // Detalhe de um monstro
  getMonsterDetail(index: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/monsters/${index}`);
  }
}
