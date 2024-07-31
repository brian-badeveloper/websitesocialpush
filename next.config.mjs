/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects () {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
  env: {
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    REACT_APP_IPREGISTRY_KEY: process.env.REACT_APP_IPREGISTRY_KEY,
    REACT_APP_IPREGISTRY_URL: process.env.REACT_APP_IPREGISTRY_URL,
    REACT_APP_API_COUNTRY: process.env.REACT_APP_API_COUNTRY,
    REACT_APP_WEBBUILDER_API_KEY: process.env.REACT_APP_WEBBUILDER_API_KEY,
  }
};

export default nextConfig;
