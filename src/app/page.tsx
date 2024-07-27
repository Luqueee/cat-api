'use client';
import { useFetchingCats } from '@/hooks/useCat';
import Footer from '@/components/Footer';
import Image from 'next/image';
import SparklesText from '@/components/magicui/sparkles-text';

export default function Home() {
    const { data, fetchCats } = useFetchingCats();

    return (
        <main className="flex overflow-x-hidden min-h-screen flex-col items-center justify-between p-2 md:lg:p-24">
            <h1
                id="top"
                className="text-5xl justify-center gap-2 text-center md:lg:text-6xl flex-wrap font-bold text-balance pt-12 flex mb-12">
                <span>Welcome to the</span>
                <SparklesText
                    text="Cats Gallery"
                    className=" text-5xl md:lg:text-6xl text-red-500 font-bold"
                />{' '}
            </h1>

            <button
                onClick={fetchCats}
                className=" py-4 px-24 bg-zinc-800/50 backdrop-blur-sm mb-8 hover:bg-zinc-700/50 transition-all duration-300 hover:scale-105 rounded-xl">
                New Cats
            </button>

            <div className="m-auto grid min-h-[100vh] min-w-full grid-cols-1 lg:grid-cols-3 gap-8">
                {data ? (
                    data.map(
                        (cat: { url: string; id: string }, index: number) => (
                            <div
                                className=" aspect-[4/4] bg-zinc-900/80 shadow-2xl shadow-transparent hover:shadow-white/50 rounded-md group backdrop-blur-sm p-8 hover:p-0 group flex justify-center items-center transition-all duration-500 ease-in-out hover:scale-105 "
                                key={cat?.id}>
                                <Image
                                    src={cat?.url ? cat.url : ''}
                                    alt={cat?.id ? cat.id : ''}
                                    draggable={false}
                                    priority={
                                        index == 0 || index == data.length - 1
                                            ? true
                                            : false
                                    }
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        boxShadow:
                                            '0 0 20px rgba(0, 0, 0, 0.5)',
                                    }}
                                    loading="eager"
                                    decoding="async"
                                    className=" object-cover w-auto h-auto rounded-lg shadow-lg shadow-gray-900/50"
                                />
                            </div>
                        )
                    )
                ) : (
                    <div className=" min-w-full h-[800px] bg-zinc-900/80 shadow-2xl  shadow-transparent hover:shadow-white/50 rounded-md group backdrop-blur-sm p-8 hover:p-0 group flex justify-center items-center transition-all duration-500 ease-in-out hover:scale-105 "></div>
                )}
            </div>

            <Footer />
        </main>
    );
}
