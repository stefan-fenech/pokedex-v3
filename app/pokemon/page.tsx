import Link from 'next/link';
import PokemonCard from '../../components/PokemonCard';
import { getPokemonList, getPokemonData } from '../../utils/index';

// async function getPokemonList() {
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=15`);
//     const data = await res.json();
//     const results = data.results;
//     return results;
// }

// async function getPokemonData(pokemonList: any[]) {
//     const data = await Promise.all(
//         pokemonList.map(async (pokemon) => {
//             const res = await fetch(pokemon.url);
//             const data = res.json();
//             return data;
//         })
//     );
//     return data;
// }

export default async function PokemonPage() {
    const pokemons = await getPokemonList();
    const pokemonData = await getPokemonData(pokemons);

    return (
        <div>
            {pokemonData.map((pokemon: any) => (
                <div key={pokemon.url} className='p-2 m-auto'>
                    <Link href={`/pokemon/${pokemon.id}`} key={pokemon.id}>
                        <PokemonCard name={pokemon.name} id={pokemon.id} image={pokemon.sprites.other.home.front_default} />
                    </Link>
                </div>
            ))}
        </div>
    );
}
