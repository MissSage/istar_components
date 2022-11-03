import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ['vue', 'element-plus'],
      output: {
        extend: true,
        inlineDynamicImports: true,
        globals: {
          vue: 'Vue',
          'element-plus': 'elementPlus'
        }
      }
    },
    lib: {
      entry: './src/components/index.ts',
      name: 'lgsform',
      formats: ['es','umd','cjs','iife']
    }
  }
})