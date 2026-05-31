import { PokemonResumo } from "../models/Pokemon";
import {
  formatarPokemon,
  formatarTitulo,
  formatarSucesso,
  formatarErro,
  formatarAviso,
} from "../utils/textFormatters";

export class CatalogoPokemon {
  private pokemons: PokemonResumo[] = [];

  adicionar(pokemon: PokemonResumo): void {
    const jaExiste = this.pokemons.some((item) => item.id === pokemon.id);

    if (jaExiste) {
      console.log(formatarAviso(`${pokemon.nome} já está no catálogo.`));
      return;
    }

    this.pokemons.push(pokemon);
    console.log(formatarSucesso(`${pokemon.nome} adicionado ao catálogo.`));
  }

  listar(): void {
    if (this.pokemons.length === 0) {
      console.log(formatarAviso("Catálogo vazio."));
      return;
    }

    console.log(formatarTitulo("Catálogo atual"));

    this.pokemons.forEach((pokemon) => {
      console.log(formatarPokemon(pokemon));
    });

    console.log("");
  }

  remover(id: number): void {
    const existe = this.pokemons.find((pokemon) => pokemon.id === id);

    if (!existe) {
      console.log(formatarAviso("Nenhum Pokémon encontrado com esse ID."));
      return;
    }

    this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id);
    console.log(formatarSucesso("Pokémon removido do catálogo."));
  }
}