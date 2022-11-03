export async function getPokemonList() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=40`);
    const data = await res.json();
    const results = data.results;
    return results;
}

export async function getPokemonData(pokemonList: any[]) {
    const data = await Promise.all(
        pokemonList.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const data = res.json();
            return data;
        })
    );
    return data;
}
