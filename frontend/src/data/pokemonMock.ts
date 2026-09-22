import type { Pokemon } from '@/types/pokemon'

export const pokemonMock: Pokemon[] = [
  {
    id: 1,
    name: 'Bulbasaur',
    types: ['grass', 'poison'],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: 4,
    name: 'Charmander',
    types: ['fire'],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
  {
    id: 7,
    name: 'Squirtle',
    types: ['water'],
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  },
]