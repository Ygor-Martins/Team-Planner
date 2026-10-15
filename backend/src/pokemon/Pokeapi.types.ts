export interface PokeApiPokemon {
  id: number;
  name: string;
  types: { slot: number; type: { name: string } }[];
  sprites: { front_default: string | null };
}

export interface PokeApiList{
    results: { name: string; url: string }[];
}