// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  eslint: {
    ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  webpack: config => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  images: {

    domains: ['static.vecteezy.com', 'upload.wikimedia.org', 'cdn-icons-png.flaticon.com', 'pbs.twimg.com'],
    remotePatterns: [{
      protocol: "https",
      hostname: "avatars.githubusercontent.com",
      port: "",
      pathname: "/**",
    },
    {
      protocol: "https",
      hostname: "api.iconify.design",
      port: "",
      pathname: "/**",
    },
    ],
  },
};

const isIpfs = process.env.NEXT_PUBLIC_IPFS_BUILD === "true";

if (isIpfs) {
  nextConfig.output = "export";
  nextConfig.trailingSlash = true;
  nextConfig.images = {
    unoptimized: true,
    remotePatterns: [{
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.iconify.design",
        port: "",
        pathname: "/**",
      },
    ],
  };
}

module.exports = nextConfig;
