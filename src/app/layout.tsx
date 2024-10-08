import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className=" dark scroll-smooth relative overflow-x-hidden">
            <body className={inter.className}>
                {children}
                <a
                    href="#top"
                    aria-label="Back top top"
                    className=" fixed group hover:border-red-500 border-transparent border-4 transition-all duration-300 z-50 bg-white text-black p-4 rounded-full bottom-4 right-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon group-hover:scale-125 transition-all duration-300 icon-tabler icons-tabler-outline icon-tabler-arrow-up">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 5l0 14" />
                        <path d="M18 11l-6 -6" />
                        <path d="M6 11l6 -6" />
                    </svg>
                    <span className="sr-only">Back to top</span>
                </a>
            </body>
        </html>
    );
}
