/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // Permite cualquier ruta dentro de este dominio
      },
      {
        protocol: 'https',
        hostname: 'martinez-rmd-payload-cms-bucket.s3.eu-west-1.amazonaws.com',
        port: '',
        pathname: '/**', // Permite cualquier carpeta dentro de tu bucket (como /Gutters/)
      },
    ],
  },
};

export default nextConfig;
