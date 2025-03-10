/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/careers/software-engineer-intern',
        destination: 'https://tally.so/r/wAjj0k',
        permanent: true,
      },
      {
        source: '/careers/software-engineer',
        destination: 'https://tally.so/r/wvddpQ',
        permanent: true,
      },
      {
        source: '/careers/growth-intern',
        destination: 'https://tally.so/r/w7ppo2',
        permanent: true,
      },
      {
        source: '/careers/general-interest',
        destination: 'https://tally.so/r/wkkkpM',
        permanent: true,
      },
      {
        source: '/careers/designer',
        destination: 'https://tally.so/r/mB22gN',
        permanent: true,
      },
      {
        source: '/chelsea',
        destination: 'https://chelseaai.vercel.app/',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
