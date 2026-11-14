/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The home page is a static page built with the taste-skill kit (public/index.html).
  // On Cloudflare the assets binding serves it for "/" before the worker runs; this
  // rewrite does the same under next dev and next start.
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/index.html" }],
    };
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
