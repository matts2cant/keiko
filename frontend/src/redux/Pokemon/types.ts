export interface PokemonType {
  id: number;
  name: string;
  height: number;
  weight: number;
}

export type PokemonMap = Record<string, PokemonType>;
