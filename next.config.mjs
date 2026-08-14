import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: { unoptimized: true },
  webpack(config) {
    // Ensure the '@' alias resolves to the project root so imports like
    // '@/components/Header' work in the Next.js build environment.
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(process.cwd()),
    }
    return config
  },
}

export default nextConfig;
