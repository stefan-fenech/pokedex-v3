import Image from 'next/image';

export default function Loading() {
    return (
        <>
            <div className='h-screen w-screen flex flex-col justify-center justify-items-center items-center text-1xl'>
                <Image src={'/loader.png'} alt='pokeball' width='80' height='80' className='animate-spin' />
            </div>
        </>
    );
}
