import Link from 'next/link';
import { TfiArrowRight } from 'react-icons/tfi';
import { getColorType } from '../../components/utils/index';
import PokemonDetailsCard from '../../components/PokemonDetailsCard';

async function getPokemonDetails(id: string) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data;
}

async function PokemonDetails({ params }: any) {
    const pokemon = await getPokemonDetails(params.id);
    const type = pokemon.types[0].type.name;
    const bgColor = getColorType(type);

    return (
        <div className={`${bgColor?.color} h-screen`}>
            <div className='flex flex-row justify-center'>
                <div className='flex justify-between mt-4 m-2 w-full capitalize text-xl text-gray-700 items-center'>
                    <h1 className='w-6'>#{`${pokemon.id}`.padStart(3, '0')}</h1>
                    <h1 className='w-auto'>{pokemon.name}</h1>
                    <h1 className='w-6'>
                        {pokemon.id < '151' && (
                            <Link href={`/${pokemon.id + 1}`} scroll={false}>
                                <TfiArrowRight />
                            </Link>
                        )}
                    </h1>
                </div>
            </div>
            <PokemonDetailsCard name={pokemon.name} id={`${pokemon.id}`.padStart(3, '0')} image={pokemon.sprites.other.home.front_default} type={pokemon.types[0].type.name} type2={pokemon.types[1]?.type.name} />
        </div>
    );
}

export default PokemonDetails;
