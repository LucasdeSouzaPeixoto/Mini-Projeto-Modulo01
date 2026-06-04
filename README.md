# Pokédex TypeScript Lite

## Sobre o projeto

O **Pokédex TypeScript Lite** é uma aplicação back-end simples desenvolvida em Node.js com TypeScript que consulta dados de Pokémon na [PokeAPI](https://pokeapi.co/) e organiza os resultados em um catálogo local durante a execução do programa.

A aplicação é executada inteiramente pelo terminal, sem interface gráfica.

---

## Objetivo

Praticar os principais conceitos do Módulo 01:

- Node.js e JavaScript no back-end
- TypeScript: tipagem, interfaces, classes, modificadores de acesso
- Funções tipadas com parâmetros e retornos explícitos
- Arrays, objetos e JSON
- Métodos de array: `map`, `some`, `forEach`, `find`, `filter`
- `async/await`, Promises e `fetch`
- Tratamento de erros com `try/catch`
- GitHub, GitFlow e Kanban

---

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TSX](https://github.com/privatenumber/tsx)
- [PokeAPI](https://pokeapi.co/)
- Git e GitHub

---

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm (incluso com o Node.js)
- [Git](https://git-scm.com/)

---

## Como instalar

Clone o repositório:

```bash
git clone https://github.com/LucasdeSouzaPeixoto/Mini-Projeto-Modulo01.git
```

Acesse a pasta do projeto:

```bash
cd pokedex-typescript-lite
```

Instale as dependências:

```bash
npm install
```

---

## Como executar

Execute o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

---

## Estrutura do projeto

```
pokedex-typescript-lite/
│
├── src/
│   ├── main.ts                  # Ponto de entrada — demonstra o fluxo completo
│   ├── controllers/             # (reservado para expansões futuras)
│   ├── models/
│   │   └── Pokemon.ts           # Interfaces PokemonResumo e PokemonApiResponse
│   ├── services/
│   │   ├── PokeApiService.ts    # Função de busca na PokeAPI (fetch + async/await)
│   │   └── BoxService.ts        # Classe CatalogoPokemon (adicionar, listar, remover)
│   └── utils/                   # (reservado para funções utilitárias futuras)
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## Funcionalidades

- Buscar Pokémon por nome ou ID via PokeAPI
- Tratar erro de Pokémon inexistente sem quebrar a aplicação
- Transformar a resposta da API em um objeto simplificado (`PokemonResumo`)
- Adicionar Pokémon ao catálogo local
- Impedir registros duplicados pelo ID
- Listar todos os Pokémon do catálogo
- Remover Pokémon do catálogo por ID
- Exibir mensagens claras no terminal para cada operação

---

## Exemplos de execução

### Busca válida

Entrada testada:
```
pikachu
```

Saída obtida:
```
[OK] Pokémon encontrado: pikachu
[OK] pikachu adicionado ao catálogo.
```

---

### Busca inválida

Entrada testada:
```
pokemon-inexistente
```

Saída obtida:
```
[ERRO] Pokémon não encontrado: pokemon-inexistente
```

---

### Duplicidade bloqueada

Entrada testada:
```
adicionar pikachu duas vezes
```

Saída obtida:
```
[AVISO] pikachu já está no catálogo.
```

---

### Listagem do catálogo

Saída obtida:
```
Catálogo atual:
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
#1 - bulbasaur | Tipos: grass, poison | Altura: 7 | Peso: 69
```

---

### Remoção por ID

Entrada testada:
```
remover ID 25
```

Saída obtida:
```
[OK] Pokémon removido do catálogo.
```

Catálogo após remoção:
```
Catálogo atual:
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
#1 - bulbasaur | Tipos: grass, poison | Altura: 7 | Peso: 69
```

---

### Remoção de ID inexistente

Entrada testada:
```
remover ID 999
```

Saída obtida:
```
[AVISO] Nenhum Pokémon encontrado com esse ID.
```

---

## Conceitos aplicados

### TypeScript
Todos os arquivos usam `.ts` com tipagem explícita. Funções têm parâmetros e retornos tipados. O `tsconfig.json` está configurado com `strict: true`.

### Interface PokemonResumo
Representa o Pokémon simplificado usado internamente no projeto, com os campos `id`, `nome`, `tipos`, `altura` e `peso`.

### Interface PokemonApiResponse
Representa apenas os campos necessários do objeto retornado pela PokeAPI, evitando dependência da estrutura completa da API externa.

### Fetch e async/await
A função `buscarPokemon` em `PokeApiService.ts` usa `fetch` nativo do Node.js com `async/await` para consultar a PokeAPI de forma assíncrona.

### Tratamento de erros
O bloco `try/catch` em `PokeApiService.ts` captura falhas de conexão. A verificação `if (!resposta.ok)` trata respostas 404 (Pokémon inexistente), retornando `null` sem quebrar a aplicação.

### Métodos de array utilizados
| Método | Onde foi usado |
|--------|---------------|
| `map` | Transformar o array de tipos da API em lista de strings (`PokeApiService.ts`) |
| `some` | Verificar duplicidade antes de adicionar ao catálogo (`BoxService.ts`) |
| `forEach` | Percorrer e exibir cada Pokémon na listagem (`BoxService.ts`) |
| `find` | Verificar se o Pokémon existe antes de remover (`BoxService.ts`) |
| `filter` | Remover o Pokémon do array pelo ID (`BoxService.ts`) |

### Classe CatalogoPokemon
Localizada em `BoxService.ts`, possui:
- Atributo `private pokemons: PokemonResumo[]` — array interno inacessível externamente
- Método `adicionar(pokemon)` — adiciona com validação de duplicidade
- Método `listar()` — exibe todos os Pokémon salvos
- Método `remover(id)` — remove pelo ID com validação de existência

---

## Organização do Kanban

Link do Kanban: https://github.com/users/LucasdeSouzaPeixoto/projects/2/views/1

---

## Branches utilizadas

- `main`
- `develop`
- `feat/pokedex`
- `docs/readme`

---

## Melhorias futuras

- Criar menu interativo no terminal com `readline`
- Salvar catálogo em arquivo JSON com `fs/promises`
- Exibir HP, ataque e defesa dos Pokémon
- Criar filtros por tipo de Pokémon
- Criar uma API REST com Express
