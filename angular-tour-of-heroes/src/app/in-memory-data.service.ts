import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Estranho' },
      { id: 13, name: 'Hulk' },
      { id: 14, name: 'Homem de Ferro' },
      { id: 15, name: 'Thor' },
      { id: 16, name: 'Homem Aranha' },
      { id: 17, name: 'Capitão América' },
      { id: 18, name: 'Viúva Negra' },
      { id: 19, name: 'Pantera Negra' },
      { id: 20, name: 'Homem Formiga' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}