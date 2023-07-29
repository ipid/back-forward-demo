import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import vueJsx from '@vitejs/plugin-vue2-jsx'
import { fileURLToPath, URL } from 'node:url'

// 参阅 https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // 支持 .vue 组件
    vue(),

    // 支持 Vue 3 的 JSX 语法
    vueJsx(),
  ],

  // 不限制部署路径
  base: './',

  resolve: {
    alias: {
      // 配置别名，这样就能在 import 的时候使用 @ 表示 src 目录。
      // 需要与 tsconfig.json 中的 paths 配置保持一致
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
