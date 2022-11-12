interface StatsProps {
    value: any;
    name: string;
}

export default function Stats({ value, name }: StatsProps) {
    return (
        <>
            <div className='flex flex-col w-full text-center uppercase text-xs'>
                <p>{name}</p>
                <div className='bg-gray-200 rounded-full'>
                    <div className='bg-blue-600 text-blue-100 text-center rounded-l-full rounded-r-full' style={{ width: value < 100 ? `${value}%` : '100%' }}>
                        {value}
                    </div>
                </div>
            </div>
        </>
    );
}
