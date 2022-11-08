'use client';

import Image from 'next/image';
import { getColorType } from './utils/index';
import Link from 'next/link';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';

interface PokemonDetailsProps {
    id?: string;
    name: string;
    type: string;
    type2?: string;
    image: string;
    goBack: string;
    goForward: string;
}

export function PokemonDetails({ id, name, type, type2, image, goBack, goForward }: PokemonDetailsProps) {
    const typeColorOne = getColorType(type);
    const typeColorTwo = getColorType(type2);

    return (
        <>
            <div className='flex justify-center items-center relative top-12 rounded-md w-1/2 m-auto'>
                <Image src={image} alt='alt' width='180' height='180' />
            </div>
            <div className='flex flex-col bg-white m-4 rounded-md p-4'>
                <div className='flex flex-row justify-between w-full'>
                    <Link href={goBack} scroll={false}>
                        <IoChevronBack />
                    </Link>
                    {id! < '151' && (
                        <Link href={goForward} scroll={false}>
                            <IoChevronForward />
                        </Link>
                    )}
                </div>
                <div className='mt-4'>
                    <div className='flex justify-center text-white'>
                        <p className={`${typeColorOne!.color} flex flex-row justify-center items-center mr-2 px-2 rounded-md border-2 border-white capitalize`}>
                            <Image src={typeColorOne!.icon} alt='type' width='32' height='32' />
                            {type}
                        </p>
                        {type2 && (
                            <p className={`${typeColorTwo!.color} flex flex-row justify-center items-center mr-2 px-2 rounded-md border-2 border-white capitalize`}>
                                <Image src={typeColorTwo!.icon} alt='type' width='32' height='32' />
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
