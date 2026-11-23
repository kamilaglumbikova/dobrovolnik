import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Automatická memoizace komponent – není potřeba ručně psát useMemo/useCallback
  reactCompiler: true,
  // Nový model cachování v Next 16 ("use cache", cacheLife, cacheTag)
  cacheComponents: true,
  partialPrefetching: true,
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
