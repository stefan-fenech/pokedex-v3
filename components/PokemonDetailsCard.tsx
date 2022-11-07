'use client';

import Image from 'next/image';
import { getColorType } from './utils/index';

interface PokemonDetailsProps {
    id?: string;
    name: string;
    type: string;
    type2?: string;
    image: string;
}

export function PokemonDetails({ id, name, type, type2, image }: PokemonDetailsProps) {
    const typeColorOne = getColorType(type);
    const typeColorTwo = getColorType(type2);

    return (
        <>
            <div className='flex justify-center items-center relative top-10 rounded-md'>
                <Image src={image} alt='alt' width='180' height='180' />
            </div>
            <div className='flex flex-col bg-white m-4 rounded-md p-4'>
                <div className='mt-4'>
                    <div className='flex justify-center text-white'>
                        <p className={`${typeColorOne?.color} flex flex-row justify-center items-center mr-2 px-2 rounded-md border-2 border-white capitalize`}>
                            <Image src={typeColorOne?.icon} alt='type' width='32' height='32' />
                            {type}
                        </p>
                        {type2 && (
                            <p className={`${typeColorTwo?.color} flex flex-row justify-center items-center mr-2 px-2 rounded-md border-2 border-white capitalize`}>
                                <Image src={typeColorTwo?.icon} alt='type' width='32' height='32' />
                                {type2}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PokemonDetails;
