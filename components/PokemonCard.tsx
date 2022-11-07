import Image from 'next/image';
import { getColorType } from './utils/index';

interface PokemonCardProps {
    id: string;
    name: string;
    type?: string;
    type2?: string;
    image: string;
}

function PokemonCard({ name, id, type, type2, image }: PokemonCardProps) {
    const typeColorOne = getColorType(type);
    const typeColorTwo = getColorType(type2);

    return (
        <div className='flex flex-row w-96 h-32'>
            <div className={`${typeColorOne?.color} h-full rounded-md text-black w-full p-2 border-2 border-gray-300`}>
                <div className='flex flex-row h-full justify-between'>
                    <div className='flex flex-col justify-between gap-1 text-gray-800'>
                        <h2 className='text-xl'>{`#${id}`}</h2>
                        <h1 className='text-2xl capitalize'>{name}</h1>
                        <div>
                            <div className='flex text-white'>
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
                    <div className='flex justify-end relative'>
                        <Image src={image} alt={name} fill className='object-contain z-10' />
                        <Image src='/Pokeball_Info.54c9e16a.svg' alt='pokeball' width='100' height='100' className='rotate-45 right-32 z-0' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;
