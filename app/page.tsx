import Link from 'next/link';
import PokemonCard from '../components/PokemonCard';

async function getPokemonList(limit: number) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    const data = await res.json();
    const results = data.results;
    return results;
}

async function getPokemonData(pokemonList: any[]) {
    const data = await Promise.all(
        pokemonList.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const data = res.json();
            return data;
        })
    );
    return data;
}

async function PokemonPage() {
    const pokemons = await getPokemonList(151);
    const pokemonData = await getPokemonData(pokemons);

    return (
        <div className='flex flex-col justify-center'>
            {pokemonData.map((pokemon: any) => (
                <div key={pokemon.url} className='p-1 m-auto'>
                    <Link href={`/${pokemon.id}`} key={pokemon.id}>
                        <PokemonCard name={pokemon.name} id={`${pokemon.id}`.padStart(3, '0')} image={pokemon.sprites.other.home.front_default} type={pokemon.types[0].type.name} type2={pokemon.types[1]?.type.name} />
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default PokemonPage;
