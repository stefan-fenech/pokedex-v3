import Link from 'next/link';
import PokemonCard from '../../components/PokemonCard';
import { getPokemonList, getPokemonData } from '../../utils/index';

async function PokemonPage() {
    const pokemons = await getPokemonList(90);
    const pokemonData = await getPokemonData(pokemons);

    return (
        <div className='flex flex-col justify-center'>
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

export default PokemonPage;
