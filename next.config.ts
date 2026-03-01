/** @type {import('next').NextConfig} */
const nextConfig: any = {
  transpilePackages: ['recharts'], // Tambahkan baris ini
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;