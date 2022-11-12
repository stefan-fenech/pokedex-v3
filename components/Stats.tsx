interface StatsProps {
    value: any;
    name: string;
}

export default function Stats({ value, name }: StatsProps) {
    function getColor(name: string) {
        if (name === 'hp') {
            return 'bg-red-400';
        }
        if (name === 'attack') {
            return 'bg-orange-400';
        }

        if (name === 'defense') {
            return 'bg-yellow-400';
        }
        if (name === 'special-attack') {
            return 'bg-blue-400';
        }
        if (name === 'special-defense') {
            return 'bg-green-400';
        }
        if (name === 'speed') {
            return 'bg-pink-400';
        }
    }
    return (
        <>
            <div className='flex flex-col w-full text-center uppercase text-xs'>
                <p>{name}</p>
                <div className='bg-gray-200 rounded-full'>
                    <div className={`${getColor(name)} text-blue-100 text-center rounded-l-full rounded-r-full`} style={{ width: value < 100 ? `${value}%` : '100%' }}>
                        {value}
                    </div>
                </div>
            </div>
        </>
    );
}
