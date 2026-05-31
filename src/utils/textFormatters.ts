import { PokemonResumo } from "../models/Pokemon";

// Formata a exibição de um Pokémon no terminal
export function formatarPokemon(pokemon: PokemonResumo): string {
  return `#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`;
}

// Formata o título de uma seção no terminal
export function formatarTitulo(titulo: string): string {
  return `\n=== ${titulo.toUpperCase()} ===\n`;
}

// Formata mensagem de sucesso
export function formatarSucesso(mensagem: string): string {
  return `[OK] ${mensagem}`;
}

// Formata mensagem de erro
export function formatarErro(mensagem: string): string {
  return `[ERRO] ${mensagem}`;
}

// Formata mensagem de aviso
export function formatarAviso(mensagem: string): string {
  return `[AVISO] ${mensagem}`;
}