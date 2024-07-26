'use client';
import { useFetchingCats } from '@/hooks/useCat';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
    const { data, fetchCats } = useFetchingCats();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-9xl font-bold my-8 mb-24">
                Welcome to the Cat Gallery
            </h1>
            <div className="m-auto grid min-w-full grid-cols-1 lg:grid-cols-4 gap-8">
                {data ? (
                    data.map((cat: { url: string; id: string }) => (
                        <div
                            className=" min-w-full h-[800px] bg-zinc-900/80 shadow-2xl  shadow-transparent hover:shadow-white/50 rounded-md group backdrop-blur-sm p-8 hover:p-0 group transition-all duration-500 ease-in-out hover:scale-105 "
                            key={cat?.id}>
                            <Image
                                src={cat?.url ? cat.url : ''}
                                alt={cat?.id ? cat.id : ''}
                                draggable={false}
                                width={0}
                                height={0}
                                sizes="100%"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
                                }}
                                loading="lazy"
                                decoding="async"
                                className=" object-cover rounded-lg shadow-lg shadow-gray-900/50"
                            />
                        </div>
                    ))
                ) : (
                    <div className="text-2xl">Loading...</div>
                )}
            </div>

            <Footer />
        </main>
    );
}
