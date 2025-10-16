import { Component, OnInit } from '@angular/core';
import { DndApiService } from '../../services/dnd-api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-spells-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './spells-list.component.html',
  styleUrls: ['./spells-list.component.css']
})
export class SpellsListComponent implements OnInit {
  groupedSpells: { [level: string]: any[] } = {};
  loading = true;
  selectedSpell: any = null;
  searchTerm = '';
  selectedLevel: string = 'all';
  openedLevels: { [key: string]: boolean } = {};

  constructor(private dndService: DndApiService) {}

  ngOnInit() {
    this.loadSpells(0, 50);
  }

  loadSpells(start: number, limit: number) {
    this.loading = true;
    this.dndService.getSpells().subscribe((data: any) => {
      const spells = data.results.slice(start, start + limit);
      let loaded = 0;
      const total = spells.length;

      spells.forEach((spell: any) => {
        this.dndService.getSpellDetail(spell.index).subscribe((detail) => {
          const level = detail.level ?? 0;
          if (!this.groupedSpells[level]) this.groupedSpells[level] = [];
          this.groupedSpells[level].push(detail);

          loaded++;
          if (loaded === total) this.loading = false; // só desliga quando todas carregarem
        });
      });
    });
  }

  showDetails(spell: any) {
    this.playSound();
    this.selectedSpell = spell;
  }

  playSound() {
    const audio = new Audio('https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg');
    audio.volume = 0.4;
    audio.play().catch(() => {});
  }

  getFilteredSpells(): { [level: string]: any[] } {
    const filtered: { [level: string]: any[] } = {};
    const term = this.searchTerm.toLowerCase();

    for (const [level, spells] of Object.entries(this.groupedSpells)) {
      if (this.selectedLevel !== 'all' && this.selectedLevel !== level) continue;

      const filteredLevelSpells = spells.filter((spell) =>
        spell.name.toLowerCase().includes(term)
      );

      if (filteredLevelSpells.length > 0) filtered[level] = filteredLevelSpells;
    }

    return filtered;
  }

  toggleLevel(level: string) {
    this.openedLevels[level] = !this.openedLevels[level];
  }

  get totalLoadedSpells(): number {
    return Object.values(this.groupedSpells).flat().length;
  }
}
