/** @type {import('next').NextConfig} */
const nextConfig = {
  // No 'standalone' output – Netlify plugin expects default .next output
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
