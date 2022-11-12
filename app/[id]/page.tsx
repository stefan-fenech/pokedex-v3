import Link from 'next/link';
import { getColorType } from '../../components/utils/index';
import PokemonDetailsCard from '../../components/PokemonDetailsCard';
import { IoClose } from 'react-icons/io5';

async function getPokemonDetails(id: string) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data;
}

async function PokemonDetails({ params }: any) {
    const pokemon = await getPokemonDetails(params.id);
    const type = pokemon.types[0].type.name;
    const bgColor = getColorType(type);

    const calcWeight = (pokemon: any) => {
        const weight = pokemon.weight / 10;
        return weight;
    };

    const calcHeight = (pokemon: any) => {
        const height = pokemon.height / 10;
        return height;
    };

    return (
        <div className={`${bgColor?.color} h-screen`}>
            <div className='flex flex-row justify-center'>
                <div className='flex justify-between mt-4 m-2 w-full capitalize text-xl text-gray-700 items-center'>
                    <h1 className='w-6'>#{`${pokemon.id}`.padStart(3, '0')}</h1>
                    <h1 className='w-auto'>{pokemon.name}</h1>
                    <div className='w-6'>
                        <Link href={`/`} scroll={false}>
                            <IoClose />
                        </Link>
                    </div>
                </div>
            </div>
            <PokemonDetailsCard
                name={pokemon.name}
                id={`${pokemon.id}`.padStart(3, '0')}
                image={pokemon.sprites.other.home.front_default}
                type={pokemon.types[0].type.name}
                type2={pokemon.types[1]?.type.name}
                goBack={`/${pokemon.id - 1}`}
                goForward={`/${pokemon.id + 1}`}
                height={calcHeight(pokemon)}
                weight={calcWeight(pokemon)}
                stats={pokemon.stats}
            />
        </div>
    );
}

export default PokemonDetails;
