import './globals.css';
import { ChakraProvider } from '@chakra-ui/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>Pokedex</title>
            </head>
            <body className='bg-gray-800'>{children}</body>
        </html>
    );
}
