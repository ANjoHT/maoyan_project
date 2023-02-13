import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [vue()],
    resolve: {
      // 配置路径别名
      alias: {
        "@": resolve(__dirname, "src"),
      },
      // 配置文件扩展名
      extensions: [".ts", ".vue", ".js", ".jsx", ".tsx"], // 导入时想要省略的扩展名列表。
    },
    css: {
      preprocessorOptions: {
        less: {
          math: "always", // 括号内才使用数学计算
          globalVars: {
            // 全局变量
            mainColor: "red",
            'primary-color': "#ef4238",
          },
        },
      },
    },
    // 配置代理服务器
    server: {
      proxy: {
        // 开发服务器
        "/api": {
          target: "https://apis.netstart.cn/maoyan",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
