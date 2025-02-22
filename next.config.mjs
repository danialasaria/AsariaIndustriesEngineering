/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/careers/software-engineer-intern',
        destination: 'https://tally.so/r/wAjj0k',
        permanent: true, // Set to true for 308 permanent redirect, false for 307 temporary redirect
      },
    ];
  },
};

export default nextConfig;
