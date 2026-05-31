import { PokemonResumo, PokemonApiResponse } from "../models/Pokemon";

export async function buscarPokemon(
  nomeOuId: string
): Promise<PokemonResumo | null> {
  const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId.toLowerCase()}`;

  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      console.log(`[ERRO] Pokémon não encontrado: ${nomeOuId}`);
      return null;
    }

    const dados = (await resposta.json()) as PokemonApiResponse;

    // map: transforma o array de tipos da API em um array simples de strings
    const tipos = dados.types.map((item) => item.type.name);

    const pokemon: PokemonResumo = {
      id: dados.id,
      nome: dados.name,
      tipos: tipos,
      altura: dados.height,
      peso: dados.weight,
    };

    console.log(`[OK] Pokémon encontrado: ${pokemon.nome}`);
    return pokemon;

  } catch (erro) {
    console.log("[ERRO] Não foi possível buscar o Pokémon.");
    return null;
  }
}