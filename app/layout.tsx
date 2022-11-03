import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head>
                <title>Pokedex</title>
            </head>
            <body>
                <header>
                    <nav>
                        <Link href='/'>Home</Link>
                        <Link href='/pokemon'>Pokemon</Link>
                    </nav>
                </header>
                {children}
            </body>
        </html>
    );
}
