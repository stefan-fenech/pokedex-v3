import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <title>Pokedex</title>
            </head>
            <body>{children}</body>
        </html>
    );
}
