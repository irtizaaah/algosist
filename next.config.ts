import { NextConfig } from 'next';

const config: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript checks during builds
  },
  webpack(config) {
    config.ignoreWarnings = [
      // Ignore any warnings, including missing Suspense boundaries
      {
        message: /.*$/,
      },
    ];
    return config;
  },
};

export default config;
