import type { NextConfig } from "next";

const designRedirects = [
  { source: "/designs/the-constantia", destination: "/designs/10ft-double-wing-folding-home", permanent: true },
  { source: "/designs/the-paarl", destination: "/designs/10ft-double-wing-folding-home", permanent: true },
  { source: "/designs/the-karoo", destination: "/designs/20ft-double-wing-folding-home", permanent: true },
  { source: "/designs/the-swartland", destination: "/designs/20ft-double-wing-folding-home", permanent: true },
  { source: "/designs/the-stellenbosch", destination: "/designs/30ft-double-wing-folding-home", permanent: true },
  { source: "/designs/the-franschhoek", destination: "/designs/30ft-double-wing-folding-home", permanent: true },
  { source: "/designs/the-blouberg", destination: "/designs/40ft-double-wing-folding-home", permanent: true },
  { source: "/designs", has: [{ type: "query" as const, key: "category", value: "Standard" }], destination: "/designs?series=Folding", permanent: true },
  { source: "/designs", has: [{ type: "query" as const, key: "category", value: "Premium" }], destination: "/designs?series=Folding", permanent: true },
  { source: "/designs", has: [{ type: "query" as const, key: "category", value: "Granny Flat" }], destination: "/designs?series=Folding", permanent: true },
  { source: "/designs", has: [{ type: "query" as const, key: "category", value: "10ft" }], destination: "/designs?series=Folding", permanent: true },
  { source: "/designs", has: [{ type: "query" as const, key: "category", value: "20ft" }], destination: "/designs?series=Folding", permanent: true },
  { source: "/designs", has: [{ type: "query" as const, key: "category", value: "30ft" }], destination: "/designs?series=Folding", permanent: true },
  { source: "/designs", has: [{ type: "query" as const, key: "category", value: "40ft" }], destination: "/designs?series=Folding", permanent: true },
];

const nextConfig: NextConfig = {
  env: {
    MAINTENANCE_MODE: process.env.MAINTENANCE_MODE,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async redirects() {
    return designRedirects;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  poweredByHeader: false,
};

export default nextConfig;
