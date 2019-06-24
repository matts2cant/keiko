export interface PokemonType {
  id: number;
  title: string;
  name: string;
  height: number;
  weight: number;
}

export type PokemonMap = Record<string, PokemonType>;
