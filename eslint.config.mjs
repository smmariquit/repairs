// eslint.config.mjs

import nextConfig from "eslint-config-next";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [".next/**", "node_modules/**"],
  },
  ...nextConfig,
  ...nextCoreWebVitals,
];

export default config;
