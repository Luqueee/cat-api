/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],

        disableStaticImages: true,
        minimumCacheTTL: 0,
    },
};

export default nextConfig;
