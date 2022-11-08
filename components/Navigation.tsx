'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const clickHandler = () => {
        if (!isOpen) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    };

    return (
        <>
            <div className='bg-gray-500 flex items-center h-10'>
                <div className='mx-4 flex flex-row justify-between items-center w-full'>
                    <button onClick={clickHandler} className='flex-basis-1/3 w-4'>
                        Menu
                    </button>
                    <h1 className='flex-basis-1/3 justify-center'>
                        <Link href={`/`} scroll={false}>
                            Pokedex
                        </Link>
                    </h1>
                    <div className='flex-basis-1/3 w-4'></div>
                </div>
            </div>
            {isOpen && (
                <div className='transition-all bg-red-500 h-72 absolute w-2/3 z-20 rounded-r-md'>
                    <button>Click me!</button>
                </div>
            )}
        </>
    );
}
