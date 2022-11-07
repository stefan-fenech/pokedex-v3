import Image from 'next/image';
import { getColorType } from '../utils/index';

interface PokemonDetailsProps {
    pokemonData: any;
}

export function PokemonDetails({ pokemonData }: PokemonDetailsProps) {
    return (
        <>
            <div className='flex justify-center items-center relative top-10 rounded-md'>
                <Image src={image} alt='alt' width='180' height='180' />
            </div>
            <div className='flex flex-col bg-white m-4 rounded-md p-4'>
                <div className='mt-4'>
                    <div className='flex justify-center'>
                        <p className={`${getColorType(type)} mr-2 px-2 rounded-md border-2 border-white capitalize`}>{type}</p>
                        <p className={`${getColorType(type2)} mr-2 px-2 rounded-md border-2 border-white capitalize`}>{type2}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PokemonDetails;
