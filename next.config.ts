// next.config.js
module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // Ignores linting errors during build
  },
  // Alternatively, add custom rules
  reactStrictMode: true,
  webpack(config) {
    config.ignoreWarnings = [
      {
        message: /useSearchParams should be wrapped in a suspense boundary/,
      },
    ];
    return config;
  },
};
