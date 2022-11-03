async function getPokemonDetails(id: string) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data;
}

export default async function PokemonDetails({ params }: any) {
    const pokemon = await getPokemonDetails(params.id);

    return (
        <div>
            <p>Pokemon Details</p>
            <p>{pokemon.id}</p>
            <p>{pokemon.name}</p>
        </div>
    );
}
