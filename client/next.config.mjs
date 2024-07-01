/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          // {
          //   protocol: 'https',
          //   hostname: 'images.pexels.com',
          //   port: '',
          //   pathname: '/**',
          // },
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '4000',
            // pathname: '/**',
          },
        ],
        // logging: {
        //   fetches: {
        //     fullUrl: true
        //   }
        // }
      },
};

export default nextConfig;
