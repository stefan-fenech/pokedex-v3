import Image from 'next/image';
import { getColorType } from '../utils/index';

interface PokemonCardProps {
    id: string;
    name: string;
    type?: string;
    type2?: string;
    image: string;
}

function PokemonCard({ name, id, type, type2, image }: PokemonCardProps) {
    return (
        <div className='flex flex-row w-96 h-32'>
            <div className={`${getColorType(type)} h-full rounded-md text-black w-full p-2 border-2 border-gray-300`}>
                <div className='flex flex-row h-full justify-between'>
                    <div className='flex flex-col w-1/2 justify-between gap-1 text-gray-800'>
                        <h2 className='text-xl'>{`#${id}`}</h2>
                        <h1 className='text-2xl capitalize'>{name}</h1>
                        <div>
                            <div className='flex'>
                                <p className={`${getColorType(type)} mr-2 px-2 rounded-md border-2 border-white capitalize`}>{type}</p>
                                {type2 && <p className={`${getColorType(type2)} mr-2 px-2 rounded-md border-2 border-white capitalize`}>{type2}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='flex w-1/2 justify-end relative'>
                        <Image src={image} alt={name} fill className='object-contain' />
                        <Image src='/Pokeball_Info.54c9e16a.svg' alt='pokeball' width='100' height='100' className='rotate-45 right-32' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;
