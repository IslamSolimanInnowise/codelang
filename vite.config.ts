import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const proxyTarget = env.VITE_PROXY_TARGET || "https://codelang.vercel.app";

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: proxyTarget,
          changeOrigin: true,
          secure: false,
        },
      },
    },
    resolve: {
      alias: {
        "@app": path.resolve(__dirname, "./src/app"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@widgets": path.resolve(__dirname, "./src/widgets"),
        "@features": path.resolve(__dirname, "./src/features"),
        "@entities": path.resolve(__dirname, "./src/entities"),
        "@shared": path.resolve(__dirname, "./src/shared"),
      },
    },
  };
});
