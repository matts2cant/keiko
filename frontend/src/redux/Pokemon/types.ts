export interface PokemonType {
  id: number;
  name: string;
  height: number;
  weight: number;
}

export type PokemonStoreType = Readonly<Record<number, PokemonType>>;
