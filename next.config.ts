import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site for GitHub Pages: no server, so images use pre-built variants via a custom loader.
  output: "export",
  trailingSlash: true,
  images: { loader: "custom", loaderFile: "./src/lib/image-loader.ts" },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
