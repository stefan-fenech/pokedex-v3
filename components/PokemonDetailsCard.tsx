'use client';

import Image from 'next/image';
import { getColorType } from './utils/index';
import Link from 'next/link';
import { IoChevronForward, IoChevronBack } from 'react-icons/io5';
import { GiBodyHeight, GiWeight } from 'react-icons/gi';
import Stats from '../components/Stats';

interface PokemonDetailsProps {
    id?: string;
    name: string;
    type: string;
    type2?: string;
    image: string;
    height: number;
    weight: number;
    goBack: string;
    goForward: string;
    stats: any;
}

export function PokemonDetails({ id, name, type, type2, image, height, weight, goBack, goForward, stats }: PokemonDetailsProps) {
    const typeColorOne = getColorType(type);
    const typeColorTwo = getColorType(type2);

    console.log(stats);

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
                    <div className='flex justify-center items-center mt-4 w-full gap-3'>
                        <div className='flex items-center gap-1'>
                            <GiBodyHeight />
                            {`${height}m`}
                        </div>
                        <p>|</p>
                        <div className='flex items-center gap-1'>
                            <GiWeight />
                            {`${weight}kg`}
                        </div>
                    </div>
                    <div className='grid grid-cols-2 grid-rows-3 gap-3'>
                        {stats.map((stat: any, index: number) => (
                            <Stats key={index} name={stat.stat.name} value={stat.base_stat} />
                        ))}
                    </div>
                    <div className='flex flex-row mt-4 w-full justify-center'>
                        <h1>Evolution info?</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PokemonDetails;
