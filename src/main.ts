import { buscarPokemon } from "./services/PokeApiService";
import { CatalogoPokemon } from "./services/BoxService";

async function main() {
  const catalogo = new CatalogoPokemon();

  console.log("=== Pokédex TypeScript Lite ===\n");

  // Busca válida
  const pikachu = await buscarPokemon("pikachu");
  if (pikachu !== null) {
    catalogo.adicionar(pikachu);
  }

  // Outra busca válida
  const charmander = await buscarPokemon("charmander");
  if (charmander !== null) {
    catalogo.adicionar(charmander);
  }

  // Mais uma busca válida
  const bulbasaur = await buscarPokemon("bulbasaur");
  if (bulbasaur !== null) {
    catalogo.adicionar(bulbasaur);
  }

  // Teste de duplicidade
  const pikachuDuplicado = await buscarPokemon("pikachu");
  if (pikachuDuplicado !== null) {
    catalogo.adicionar(pikachuDuplicado);
  }

  // Teste de Pokémon inexistente
  await buscarPokemon("pokemon-inexistente");

  // Lista o catálogo
  catalogo.listar();

  // Remove o pikachu (ID 25)
  catalogo.remover(25);

  // Lista novamente para confirmar a remoção
  catalogo.listar();

  // Tenta remover um ID que não existe
  catalogo.remover(999);
}

main();