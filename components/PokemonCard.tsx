import Image from 'next/image';

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
            <div className='h-full bg-gray-200 rounded-md text-black w-full p-2'>
                <div className='flex flex-row h-full justify-between'>
                    <div className='flex flex-col w-1/2 justify-between'>
                        <h1>{id}</h1>
                        <h1>{name}</h1>
                        <div>
                            <p>{type}</p>
                            <p>{type2}</p>
                        </div>
                    </div>
                    <div className='flex w-1/2 justify-end relative'>
                        <Image src={image} alt={name} fill className='object-contain' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;
