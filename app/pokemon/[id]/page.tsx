import Image from 'next/image';
import { getColorType } from '../../../utils/index';

async function getPokemonDetails(id: string) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data;
}

export default async function PokemonDetails({ params }: any) {
    const pokemon = await getPokemonDetails(params.id);

    return (
        <div className={`${getColorType(pokemon.types[0].type.name)} h-screen`}>
            <div className='flex justify-center items-center relative top-10 rounded-md'>
                <Image src={pokemon.sprites.other.home.front_default} alt={pokemon.name} width='180' height='180' />
            </div>
            <div className='flex flex-col bg-white m-4 rounded-md p-4'>
                <div className='mt-4'>
                    <div className='flex justify-center'>
                        <p className={`${getColorType(pokemon.types[0].type.name)} mr-2 px-2 rounded-md border-2 border-white capitalize`}>{pokemon.types[0]?.type.name}</p>
                        {pokemon.types.length > 1 && <p className={`${getColorType(pokemon.types[1]?.type.name)} mr-2 px-2 rounded-md border-2 border-white capitalize`}>{pokemon.types[1]?.type.name}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}
