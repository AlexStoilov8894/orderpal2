import next from "next";

const nextConfig = {
  experimental: {
    ...next.experimental,
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["m.media-amazon.com"],
  },
};

export default nextConfig;
